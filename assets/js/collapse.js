let collapsibles = document.getElementsByClassName("collapse");

for (let i = 0; i < collapsibles.length; i++) {
    collapsibles[i].addEventListener("click", function() {
        this.classList.toggle("collapse-active");
        let content = this.nextElementSibling;
        if (content.style.maxHeight){
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";;
        } 
    });
}