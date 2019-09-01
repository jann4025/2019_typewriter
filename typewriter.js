"use strict";
document.addEventListener("DOMContentLoaded", start);

function start() {
    document.querySelector(".click-to-begin").classList.remove("hide");
    const text = document.querySelector("#typewriter").textContent;
    const textSplit = text.split("");
    const spaceSound = document.querySelector("#typespace");
    let time;
    let typeSound = document.querySelector(
        "#typekey" + Math.floor(Math.floor(Math.random() * 2 + 1))
    );
    let letterCount = 0;
    document.querySelector("#typewriter").textContent = text.substring(0, 1);

    document
        .querySelector(".click-to-begin h1")
        .addEventListener("click", showLetterOne);

    function showLetterOne() {
        document.querySelector(".click-to-begin").classList.add("hide");
        document.querySelector("#typewriter").textContent = text.charAt(
            letterCount
        );
        // time = setTimeout(showLetter, Math.random() * 400 + 300);
        time = setTimeout(showLetter, Math.floor(Math.random() * 200 + 50));
    }

    function showLetter() {
        let Spacesound = document.querySelector("#typespace");

        let timeOut = Math.floor(Math.random() * 500 + 100);
        letterCount++;
        console.log(timeOut);
        document.querySelector("#typewriter").textContent += text.charAt(
            letterCount
        );
        if (letterCount == 44) {
            console.log("Sidste bogstav");
            start();
            clearTimeout(time);
            return;
        }
        // time = setTimeout(showLetter, timeOut);
        time = setTimeout(showLetter, Math.floor(Math.random() * 200 + 50));
    }
}