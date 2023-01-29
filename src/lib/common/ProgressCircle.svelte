<script lang="ts">
    export let radius: number;
    export let thickness: number;
    export let color: string;
    export let value: number;

    function calcCircleLength(radius: number): number {
        return 2 * Math.PI * radius;
    }
</script>

<svg width={radius * 2 + thickness} height={radius * 2 + thickness} viewBox="{-radius - thickness / 2} {-radius - thickness / 2} {radius * 2 + thickness} {radius * 2 + thickness}">
    <circle r={radius} stroke="#171717" stroke-width={thickness} stroke-linecap="round" fill="transparent"/>
    <circle r={radius} stroke={color} stroke-width={thickness} stroke-linecap="round" stroke-dasharray={calcCircleLength(radius)} stroke-dashoffset={calcCircleLength(radius) * (1.0 - (value / 100.0))} fill="transparent"/>
</svg>