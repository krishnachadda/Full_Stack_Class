
var screen = document.getElementById("screen");
var timer;
var startTime;
var ready = false;

function startGame() {
    clearTimeout(timer);
    ready = false;

    screen.classList.remove("green");
    screen.textContent = "Wait for green...";
    document.getElementById("result").textContent = "";

    var delay = Math.floor(Math.random() * 3000) + 2000;

    timer = setTimeout(function() {
        screen.classList.add("green");
        screen.textContent = "CLICK NOW!";
        startTime = Date.now();
        ready = true;
    }, delay);
}

function checkTime() {
    if (ready) {
        var reaction = Date.now() - startTime;

        document.getElementById("result").textContent =
            "Your time: " + reaction + " ms";

        ready = false;
        screen.classList.remove("green");
        screen.textContent = "Click Start again!";
    }
    else {
        clearTimeout(timer);
        document.getElementById("result").textContent = "Too early!";
    }
}