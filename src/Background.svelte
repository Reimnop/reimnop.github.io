<script>
    import { onMount } from "svelte";

    let canvas, gl;
    let elapsed = 0, lastTime;

    const vertShaderCode = `
    precision highp float;

    attribute vec3 aPos;
    attribute vec2 aTexCoord;

    varying vec2 TexCoord;

    void main() {
        TexCoord = aTexCoord;
        gl_Position = vec4(aPos, 1.0);
    }
    `

    const fragShaderCode = `
    precision highp float;

    varying vec2 TexCoord;

    uniform float t;
    uniform vec2 resolution;

    vec3 mod289(vec3 x) {
      return x - floor(x * (1.0 / 289.0)) * 289.0;
    }

    vec2 mod289(vec2 x) {
      return x - floor(x * (1.0 / 289.0)) * 289.0;
    }

    vec3 permute(vec3 x) {
      return mod289(((x*34.0)+10.0)*x);
    }

    float snoise(vec2 v) {
        const vec4 C = vec4(0.211324865405187,  // (3.0-sqrt(3.0))/6.0
                            0.366025403784439,  // 0.5*(sqrt(3.0)-1.0)
                           -0.577350269189626,  // -1.0 + 2.0 * C.x
                            0.024390243902439); // 1.0 / 41.0
        // First corner
        vec2 i  = floor(v + dot(v, C.yy) );
        vec2 x0 = v -   i + dot(i, C.xx);

        // Other corners
        vec2 i1;
        //i1.x = step( x0.y, x0.x ); // x0.x > x0.y ? 1.0 : 0.0
        //i1.y = 1.0 - i1.x;
        i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
        // x0 = x0 - 0.0 + 0.0 * C.xx ;
        // x1 = x0 - i1 + 1.0 * C.xx ;
        // x2 = x0 - 1.0 + 2.0 * C.xx ;
        vec4 x12 = x0.xyxy + C.xxzz;
        x12.xy -= i1;

        // Permutations
        i = mod289(i); // Avoid truncation effects in permutation
        vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 )) + i.x + vec3(0.0, i1.x, 1.0 ));

        vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
        m = m*m ;
        m = m*m ;

        // Gradients: 41 points uniformly over a line, mapped onto a diamond.
        // The ring size 17*17 = 289 is close to a multiple of 41 (41*7 = 287)

        vec3 x = 2.0 * fract(p * C.www) - 1.0;
        vec3 h = abs(x) - 0.5;
        vec3 ox = floor(x + 0.5);
        vec3 a0 = x - ox;

        // Normalise gradients implicitly by scaling m
        // Approximation of: m *= inversesqrt( a0*a0 + h*h );
        m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );

        // Compute final noise value at P
        vec3 g;
        g.x  = a0.x  * x0.x  + h.x  * x0.y;
        g.yz = a0.yz * x12.xz + h.yz * x12.yw;
        return 130.0 * dot(m, g);
    }

    float noise(float x, float y) {
        return clamp(snoise(vec2(x * 3840.0, y * 1280.0)) * 1.5, 0.0, 1.0);
    }

    vec4 layer(float x, float y, float t, float primarySeed, float maskSeed, float blinkSeed) {
        float w = 0.0015;
        float c = noise(x, primarySeed) * 4.0 - 2.0;
        float mask = noise(x, maskSeed);
        float blink = sin(noise(x, blinkSeed) * 48.0 + y * 96.0) * 0.65;

        if (mask > 0.95 && abs(mod(y + t, 2.0) - c) < w) {
            return vec4(1.0 - blink);
        } else {
            return vec4(0.0);
        }
    }

    void main() {
        float xStep = 1.0 / resolution.x * 2.0;
        vec2 calculatedTexCoord = vec2(floor(TexCoord.x / xStep) * xStep, TexCoord.y);

        vec4 l1 = layer(calculatedTexCoord.x, calculatedTexCoord.y, t / 24.0, 0.0, 0.2, 0.4);
        vec4 l2 = layer(calculatedTexCoord.x, calculatedTexCoord.y, t / 32.0, 0.1, 0.3, 0.5) * 0.6;
        vec4 l3 = layer(calculatedTexCoord.x, calculatedTexCoord.y, t / 40.0, 0.2, 0.4, 0.6) * 0.3;
        vec4 l4 = layer(calculatedTexCoord.x, calculatedTexCoord.y, t / 48.0, 0.3, 0.5, 0.7) * 0.1;

        gl_FragColor = l1 + l2 + l3 + l4;
    }
    `

    let program, posLoc, texCoordLoc, tLoc, resLoc;
    let buffer, count;

    onMount(() => {
        gl = canvas.getContext("webgl");

        if (gl === null) {
            alert("Unable to initialize WebGL. Your browser or machine may not support it.");
            return;
        }

        initResources();
        window.requestAnimationFrame(draw);
    });

    function initResources() {
        initShader();

        let vertices = [
            -1.0, -1.0, 0.0, 0.0, 0.0,
             1.0,  1.0, 0.0, 1.0, 1.0,
            -1.0,  1.0, 0.0, 0.0, 1.0,
            -1.0, -1.0, 0.0, 0.0, 0.0,
             1.0, -1.0, 0.0, 1.0, 0.0,
             1.0,  1.0, 0.0, 1.0, 1.0
        ];
        count = vertices.length / 5;

        buffer = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
        gl.bindBuffer(gl.ARRAY_BUFFER, null);
    }

    function initShader() {
        const vertShader = gl.createShader(gl.VERTEX_SHADER);
        gl.shaderSource(vertShader, vertShaderCode);
        gl.compileShader(vertShader);

        if (!gl.getShaderParameter(vertShader, gl.COMPILE_STATUS)) {
            alert("Unable to initialize the vertex shader: " + gl.getShaderInfoLog(vertShader));
            return;
        }

        const fragShader = gl.createShader(gl.FRAGMENT_SHADER);
        gl.shaderSource(fragShader, fragShaderCode);
        gl.compileShader(fragShader);

        if (!gl.getShaderParameter(fragShader, gl.COMPILE_STATUS)) {
            alert("Unable to initialize the fragment shader: " + gl.getShaderInfoLog(fragShader));
            return;
        }

        program = gl.createProgram();
        gl.attachShader(program, vertShader);
        gl.attachShader(program, fragShader);
        gl.linkProgram(program);

        if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
            alert("Unable to initialize the shader program: " + gl.getProgramInfoLog(program));
            return;
        }

        // cleanup
        gl.detachShader(program, vertShader);
        gl.detachShader(program, fragShader);
        gl.deleteShader(vertShader);
        gl.deleteShader(fragShader);

        posLoc = gl.getAttribLocation(program, "aPos");
        texCoordLoc = gl.getAttribLocation(program, "aTexCoord");
        tLoc = gl.getUniformLocation(program, "t");
        resLoc = gl.getUniformLocation(program, "resolution");
    }

    function draw(time) {
        time /= 1000;

        let deltaTime = 0.016;
        if (lastTime !== undefined) {
            deltaTime = time - lastTime;
        }
        lastTime = time;

        elapsed += deltaTime;

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        gl.viewport(0, 0, canvas.width, canvas.height);

        gl.clearColor(0.0, 0.0, 0.0, 0.0);
        gl.clear(gl.COLOR_BUFFER_BIT);

        // drawing
        gl.useProgram(program);
        gl.uniform1f(tLoc, elapsed);
        gl.uniform2f(resLoc, canvas.width, canvas.height);

        gl.bindBuffer(gl.ARRAY_BUFFER, buffer);

        gl.vertexAttribPointer(posLoc, 3, gl.FLOAT, false, 20, 0);
        gl.enableVertexAttribArray(posLoc);

        gl.vertexAttribPointer(texCoordLoc, 2, gl.FLOAT, false, 20, 12);
        gl.enableVertexAttribArray(texCoordLoc);

        gl.drawArrays(gl.TRIANGLES, 0, count);

        window.requestAnimationFrame(draw);
    }
</script>

<canvas class="fixed w-screen h-screen -z-10" bind:this="{canvas}"></canvas>
