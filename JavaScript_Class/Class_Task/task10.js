
const game = document.querySelector("#game");
const matchesText = document.querySelector("#matches");
const message = document.querySelector("#message");
const restartBtn = document.querySelector("#restartBtn");

const symbols = ["🍎", "🚀", "🐱", "⚽", "🌟", "🎵", "🍕", "🌈"];

let firstCard = null;
let secondCard = null;
let lockBoard = false;
let matches = 0;
let timer = null;

// Shuffle the cards randomly
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));

        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }

    return array;
}

// Start or restart the game
function startGame() {
    clearTimeout(timer);

    firstCard = null;
    secondCard = null;
    lockBoard = false;
    matches = 0;

    matchesText.textContent = matches;
    message.textContent = "Find all matching pairs!";
    game.innerHTML = "";

    let cards = shuffle([...symbols, ...symbols]);

    // Create 16 cards
    for (let i = 0; i < cards.length; i++) {
        let card = document.createElement("button");

        card.classList.add("card");
        card.textContent = "?";
        card.dataset.symbol = cards[i];

        game.appendChild(card);
    }
}

// Handle clicks using event delegation
game.addEventListener("click", function(event) {
    let clickedCard = event.target;

    // Ignore clicks outside a card
    if (!clickedCard.classList.contains("card")) {
        return;
    }

    // Ignore clicks while waiting for cards to flip back
    if (lockBoard) {
        return;
    }

    // Ignore already opened or matched cards
    if (
        clickedCard.classList.contains("flipped") ||
        clickedCard.classList.contains("matched")
    ) {
        return;
    }

    // Reveal the selected card
    clickedCard.textContent = clickedCard.dataset.symbol;
    clickedCard.classList.add("flipped");

    // Store the first card
    if (firstCard === null) {
        firstCard = clickedCard;
        return;
    }

    // Store the second card
    secondCard = clickedCard;

    // Check whether the cards match
    if (firstCard.dataset.symbol === secondCard.dataset.symbol) {

        firstCard.classList.add("matched");
        secondCard.classList.add("matched");

        matches++;
        matchesText.textContent = matches;

        resetTurn();

        // Check whether all pairs are matched
        if (matches === 8) {
            message.textContent = "Congratulations! You won!";
        }

    } else {

        // Lock the board until the cards flip back
        lockBoard = true;
        message.textContent = "Not a match! Try again.";

        timer = setTimeout(function() {

            firstCard.textContent = "?";
            secondCard.textContent = "?";

            firstCard.classList.remove("flipped");
            secondCard.classList.remove("flipped");

            resetTurn();

            message.textContent = "Find the matching pairs!";

        }, 1000);
    }
});

// Reset variables after each turn
function resetTurn() {
    firstCard = null;
    secondCard = null;
    lockBoard = false;
}

// Restart the game
restartBtn.addEventListener("click", startGame);

// Initialize the game
startGame();
