let scroll_text = document.getElementById("scroll-text");
window.addEventListener("scroll", onScroll);

function onScroll() {
    scroll_text.style.opacity = clamp((250 - window.scrollY) / 250, 0, 1);

    if (scroll_text.style.opacity == 0) {
        scroll_text.style.display = "none";
    } else {
        scroll_text.style.display = "block";
    }
}

function clamp(num, min, max) {
    return ((num <= min) ? min : ((num >= max) ? max : num));
}