let number = Math.floor(Math.random() * 100) + 1;
let chances = 7;

function guess() {
    let guessNumb = Number(document.querySelector(".guess").value);
    let para = document.querySelector(".para");

    if (chances === 0) {
        return;
    }

    if (document.querySelector(".guess").value === "") {
        para.textContent = "Please enter a number!";
        return;
    }

    chances--;

    if (guessNumb === number) {
        para.textContent = "Correct! You won!";
        endGame();
    } else if (guessNumb < number) {
        para.textContent = "Try a higher number.";
    } else {
        para.textContent = "Try a lower number.";
    }

    if (chances === 0 && guessNumb !== number) {
        para.textContent = "Game Over! Number was " + number;
        endGame();
    }

    if (chances > 0 && guessNumb !== number) {
        para.textContent += " Chances left: " + chances;
    }
}

function endGame() {
    document.querySelector(".guess").disabled = true;
    document.querySelector("button").disabled = true;
}