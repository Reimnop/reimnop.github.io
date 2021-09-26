let bg_container = document.getElementById("background");
for (let i = 0; i < 200; i++) {
    bg_container.innerHTML += `<div class="star"></div>`
}

let stars = document.getElementsByClassName("star");
for (let i = 0; i < stars.length; i++) {
    stars[i].style.marginTop = Math.floor((Math.random() * 2 - 1) * 100) + "%";
    stars[i].style.marginLeft = Math.floor((Math.random() * 2 - 1) * 100) + "%";
}