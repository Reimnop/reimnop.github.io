let content_boxes = document.getElementsByClassName("collapse");
for (let i = 0; i < content_boxes.length; i++) {
    content_boxes[i].style.animationDelay = i * 0.4 + "s";
}