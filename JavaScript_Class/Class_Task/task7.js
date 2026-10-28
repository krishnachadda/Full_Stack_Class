
let cells = document.querySelectorAll(".cell");

let scoreText = document.querySelector("#score");
let timeText = document.querySelector("#time");
let startBtn = document.querySelector("#startBtn");
let message = document.querySelector("#message");

let score = 0;
let timeLeft = 30;
let moleIndex = -1;
let playing = false;

let moleTimer;
let gameTimer;


function showMole() {

    for (let i = 0; i < cells.length; i++) {
        cells[i].classList.remove("active");
        cells[i].textContent = i + 1;
    }

    moleIndex = Math.floor(Math.random() * 9);

    cells[moleIndex].classList.add("active");
    cells[moleIndex].textContent = "🐹";
}


for (let i = 0; i < cells.length; i++) {

    cells[i].addEventListener("click", function () {

        if (playing && i === moleIndex) {

            score++;
            scoreText.textContent = score;

            showMole();
        }

    });

}


startBtn.addEventListener("click", function () {

    if (playing) {
        return;
    }

    score = 0;
    timeLeft = 30;
    playing = true;

    scoreText.textContent = score;
    timeText.textContent = timeLeft;
    message.textContent = "Click the mole!";

    startBtn.disabled = true;

    showMole();

    moleTimer = setInterval(showMole, 800);

    gameTimer = setInterval(function () {

        timeLeft--;
        timeText.textContent = timeLeft;

        if (timeLeft === 0) {

            clearInterval(moleTimer);
            clearInterval(gameTimer);

            playing = false;
            moleIndex = -1;

            for (let i = 0; i < cells.length; i++) {
                cells[i].classList.remove("active");
                cells[i].textContent = i + 1;
            }

            message.textContent =
                "Game Over! Your score is " + score;

            startBtn.disabled = false;
        }

    }, 1000);

});
