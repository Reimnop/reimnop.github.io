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
    const threshold = 180;

    let top = bounds.top + window.scrollY;
    let bottom = bounds.bottom + window.scrollY;

    if (window.scrollY > bottom - threshold) {
        let dst = threshold - bounds.bottom;
        return clamp01(1 - dst / threshold);
    }

    if (window.scrollY + window.innerHeight > top) {
        let dst = window.scrollY + window.innerHeight - top;
        return clamp01(dst / threshold);
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