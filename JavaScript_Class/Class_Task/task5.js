function game() {
    let compOpt = Math.floor(Math.random() * 3) + 1;

    let para = document.querySelector(".para");
    let userInput = Number(document.getElementById("userInput").value);

    if (compOpt == userInput) {
        para.textContent = "TIE";
    }
    else if (
        (compOpt == 1 && userInput == 2) ||
        (compOpt == 2 && userInput == 3) ||
        (compOpt == 3 && userInput == 1)
    ) {
        para.textContent = "You Win!";
    }
    else if (userInput >= 1 && userInput <= 3) {
        para.textContent = "You Lose!";
    }
    else {
        para.textContent = "Please enter 1, 2, or 3!";
    }

    para.textContent += " Computer chose: " + compOpt;
}

// whack a Mole 3x3 matrix
// 