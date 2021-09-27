let scroll_text = document.getElementById("scroll-text");
window.addEventListener("scroll", scrollTextHandler);

// content box fading effect
let content_boxes = document.getElementsByClassName("content-box");
for (let i = 0; i < content_boxes.length; i++) {
    window.addEventListener("scroll", function() {
        let box = content_boxes[i];
        let rect = box.getBoundingClientRect();
        box.style.opacity = calculateOpacity(rect);
    });
}

function calculateOpacity(bounds) {
    let top = bounds.top + window.scrollY;

    if (window.scrollY + window.innerHeight > top) {
        let dst = window.scrollY + window.innerHeight - top;
        return clamp01(dst / 200);
    }

    return 1;
}

// scroll text fading effect
function scrollTextHandler() {
    scroll_text.style.opacity = clamp((250 - window.scrollY) / 250, 0, 1);

    if (scroll_text.style.opacity == 0) {
        scroll_text.style.display = "none";
    } else {
        scroll_text.style.display = "block";
    }
}

function clamp01(num) {
    return clamp(num, 0, 1);
}

function clamp(num, min, max) {
    return Math.min(Math.max(num, min), max);
}