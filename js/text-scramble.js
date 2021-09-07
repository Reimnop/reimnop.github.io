class Scrambler {
    constructor(text, elem) {
        this.text = text;
        this.elem = elem;
        this.textIndex = 0;
        this.currentText = "";

        window.requestAnimationFrame((ts) => this.step(ts));
    }

    step(timestamp) {
        this.elem.innerHTML = this.currentText + "▒░░";
        this.currentText += this.text[this.textIndex];

        if (this.textIndex < this.text.length) {
            window.requestAnimationFrame((ts) => this.step(ts));
            this.textIndex++;
        }
        else {
            this.elem.innerHTML = this.text;
        }
    }
}

function scrambleText(className) {
    let elements = document.getElementsByClassName(className);
    for (let i = 0; i < elements.length; i++) {
        new Scrambler(elements[i].innerHTML, elements[i]);
    }
}