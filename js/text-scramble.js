function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}  

async function scramble(text, element) {
    element.innerHTML = "";
    let newText = "";
    for (let i = 0; i < text.length; i++) {
        newText += text[i];
        element.innerHTML = newText + "▒░░";
        await sleep(5);
    }

    element.innerHTML = text;
}

let elements = document.getElementsByClassName("scramble");
for (let i = 0; i < elements.length; i++) {
    scramble(elements[i].innerHTML, elements[i]);
}