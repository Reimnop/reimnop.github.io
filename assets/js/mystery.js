let write_area = document.getElementById("write-area");

const sleep = t => new Promise(s => setTimeout(s, t));
const storage = window.localStorage;

let current_num = 0;
if (storage.getItem("value")) {
    current_num = parseInt(storage.getItem("value"));
}

switch (current_num) {
    case 0:
        action_0();
        break;
    case 1:
        action_1();
        break;
    case 2:
        action_2();
        break;
    case 3:
    case 4:
        storage.setItem("value", current_num + 1);
        break;
    case 5:
        action_5();
        break;
    case 6:
        action_6();
        break;
    case 7:
        action_7();
        break;
    case 8:
        action_8();
        break;
    case 9:
    case 10:
    case 11:
        storage.setItem("value", current_num + 1);
        break;
    case 12:
        action_12();
        break;
    case 13:
        action_13();
        break;
    case 14:
        action_14();
        break;
    case 15:
        action_15();
        break;
    case 16:
        action_16();
        break;
    case 17:
    case 18:
        storage.setItem("value", current_num + 1);
        break;
    case 19:
        action_19();
        break;
    case 20:
        action_20();
        break;
    case 21:
        action_21();
        break;
    case 22:
        action_22();
        break;
    case 23:
    case 24:
        storage.setItem("value", current_num + 1);
        break;
    case 25:
        action_25();
        break;
    case 26:
        action_26();
        break;
    case 27:
        storage.setItem("value", current_num + 1);
        break;
    case 28:
        action_28();
        break;
}

async function action_0() {
    await sleep(500);
    await typeWrite("WELCOME.", 50);
    await sleep(1500);
    write_area.innerHTML += "<br>";
    await typeWrite("WELCOME ", 50);
    await sleep(500);
	await typeWrite("TO ", 50);
	await typeWrite("PGEV.EXE", 200);
    await sleep(1000);
    write_area.innerHTML += "<br><br>";
    await typeWrite("WHY ARE YOU HERE?", 75);
    await sleep(100);
    write_area.innerHTML += "<br>";
    await typeWrite("> ");
    await acceptUserInput();
    write_area.innerHTML += "<br>";
    await typeWrite("PLEASE, CLOSE PGEV.EXE", 75);
    await sleep(100);
    write_area.innerHTML += "<br>";
    await typeWrite("> ");
    await acceptUserInput();
    write_area.innerHTML += "<br>";
    await typeWrite("PLEASE, TYPE \"exit\" TO CLOSE PGEV.EXE", 75);
    write_area.innerHTML += "<br>";
    await typeWrite("> ");
    await acceptUserInput();
    storage.setItem("value", current_num + 1);
}

async function action_1() {
	await sleep(1000);
	await typeWrite("Wait.", 50);
	await sleep(250);
	await typeWrite(" Are you still here?", 50);
	await sleep(1500);
	await typeWrite(" I asked you to close pgev.exe, didn't I?", 50);
	await sleep(2000);
    write_area.innerHTML += "<br>";
	await typeWrite("I probably forgot to say you should never open it again.", 50);
	await sleep(800);
    write_area.innerHTML += "<br>";
	await typeWrite("I'll close it for you.", 50);
	await sleep(500);
	await typeWrite(" You better delete the file actually.", 50);
    storage.setItem("value", current_num + 1);
}

async function action_2() {
	await typeWrite("Okay, I'm not joking. The file is LITERALLY named PGEV.exe.", 40);
	await sleep(1000);
    write_area.innerHTML += "<br>";
	await typeWrite("It's a goddamn Peer Gynt Ench Version, do you expect this file to be safe or something?", 40);
	await sleep(1500);
    write_area.innerHTML += "<br>";
	await typeWrite("Do you even listen?", 40);
	await sleep(500);
    write_area.innerHTML += "<br>";
	await typeWrite("Close the file.", 40);
	await sleep(500);
    write_area.innerHTML += "<br>";
	await typeWrite("Right now.", 40);
	storage.setItem("value", current_num + 1);
}

async function action_5() {
    await typeWrite("ENCH");
    write_area.innerHTML += "<br><br>";
    await typeWrite("Ench is a character made by enchart and the antagonist of enchart's Peer Gynt level.", 50);
    storage.setItem("value", current_num + 1);
}

async function action_6() {
    await typeWrite("HISTORY");
    write_area.innerHTML += "<br><br>";
    await typeWrite("In enchart's Peer Gynt, Ench got stabbed by the pink triangle and tried to kill the player that got in his way with the help of his new powers. After a while a strange \"Leader\" sign appears and stabs Ench to turn him into his Leader form. Then he starts trying to smash the player with hammers and after a few tries he traps the player between pink walls that going to crush him. But right before it some other shapes appear, save the player from walls and kill Ench.", 50);
    storage.setItem("value", current_num + 1);
}

async function action_7() {
    await typeWrite("APPEARANCE");
    write_area.innerHTML += "<br><br>";
    await typeWrite("Ench is a mint square with black eyes and mouth white hands. He also had a pink triangle in the right side before his death. In his corrupted form, his mouth is replaced by four teeth and his body is pink. In the Leader form, he has his regular mouth, and some parts of his body are chipped.", 50);
    write_area.innerHTML += "<br>";
    await typeWrite("His attacks are usually pink lasers, bullets and hammers. He can also teleport the player to The Pink Tower with large amount of traps.", 50);
    storage.setItem("value", current_num + 1);
}

async function action_8() {
    await typeWrite("TRIVIA");
    write_area.innerHTML += "<br><br>";
    await typeWrite("- Ench's full name is Enchariud", 50);
    write_area.innerHTML += "<br>";
    await typeWrite("- Ench is often mistakenly called as Leader because of the Leader sign in the middle of enchart’s Peer Gynt.", 50);
    write_area.innerHTML += "<br>";
    await typeWrite("- Ench's PA Wiki page content is included in pgev.ex", 50);
    write_area.innerHTML = "";
    document.getElementsByTagName("body")[0].style.background = "red";
    for (let i = 0; i < 10; i++)
	{
		await typeWrite("PGEV.EXE ", 2);
	}
    storage.setItem("value", current_num + 1);
}

async function action_12() {
    document.getElementsByTagName("body")[0].style.background = "red";
    for (let i = 0; i < 10; i++)
	{
		await typeWrite("PGEV.EXE ", 2);
	}
    storage.setItem("value", current_num + 1);
}

async function action_13() {
    await typeWrite("PLEASE STOP aHR0cHM6Ly", 25);
    storage.setItem("value", current_num + 1);
}

async function action_14() {
    await typeWrite("WE'RE ALL 90aW55dXJs IN DANGER", 25);
    storage.setItem("value", current_num + 1);
}

async function action_15() {
    await typeWrite("I LOVE PGEV, IT'S LmNvbS9wZ2 THE BEST LEVEL IN PA!", 25);
    storage.setItem("value", current_num + 1);
}

async function action_16() {
    await typeWrite("This file does not contain any V2ZG90ZXhl", 25);
    storage.setItem("value", current_num + 1);
}

async function action_19() {
    await typeWrite("Please consider playing Peer Gynt by Enchariud! https://stea", 25);
    storage.setItem("value", current_num + 1);
}

async function action_20() {
    await typeWrite("is a class in PA code that manipulates the beatmap, editor an", 50);
    storage.setItem("value", current_num + 1);
}

async function action_21() {
    await typeWrite("nd, Arbis has to collect all four Po", 50);
    storage.setItem("value", current_num + 1);
}

async function action_22() {
    await typeWrite("ped creatures that swirled around the weird bi", 25);
    storage.setItem("value", current_num + 1);
}

async function action_25() {
    await typeWrite("235095218855084032", 10);
    storage.setItem("value", current_num + 1);
}

async function action_26() {
    await typeWrite("LEADER LEADER DATAM LEADER DATAMANAGER LEADER DATAM TATAM MANAGER DATAMANAGER LEAADER DA", 25);
    storage.setItem("value", current_num + 1);
}

async function action_28() {
    await typeWrite("Sorry, but you will not understand my message.", 50);
	await sleep(500);
	await typeWrite(" Nothing bad will happen.", 50);
	await sleep(1000);
	await typeWrite(" Thanks for staying here.", 50);
	await sleep(50);
    write_area.innerHTML += "<br>";
	await typeWrite("- L", 50);
	storage.clear();
}

async function typeWrite(msg, timeout) {
    for (let i = 0; i < msg.length; i++) {
        write_area.innerHTML += msg[i];
        await sleep(timeout);
    }
}

async function acceptUserInput() {
    let blocking = true;
    document.addEventListener("keydown", function userInputHandler(event) {
        if (event.code == "Enter") {
            write_area.innerHTML += "<br>";
            blocking = false;
            document.removeEventListener("keydown", userInputHandler);
        } else if (event.key.length == 1) {
            write_area.innerHTML += event.key;
        }
    });
    while (blocking) {
        await sleep(10);
    }
}