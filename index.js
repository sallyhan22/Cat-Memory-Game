const cards = document.querySelectorAll('.memory-card');
let score = document.getElementById('score');
let hasFlippedCard = false;
let firstCard, secondCard;
let lockBoard = false;
var sc = 0;


startGame();

function startGame() {
    shuffleCards();
    setCards();
}

function shuffleCards() {
    cards.forEach(card => {
        let randomIndex = Math.floor(Math.random() * 12);
        card.style.order = randomIndex;
    });
}

function setCards() {
    cards.forEach(card => card.addEventListener('click', flipCard));
}

function flipCard() {

// to prevent any more cards to be flipped if two have already been flipped
    if (lockBoard) {
        return;
    }

    if (this === firstCard) {
        return;
    }

    this.classList.add('flip');

    if (!hasFlippedCard) {
        hasFlippedCard = true;
        firstCard = this;
        return;
    } 
    
    secondCard = this;
    checkForMatch();
}

function checkForMatch() {
    let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;
    if (isMatch) {
        disableFlipping();
        setTimeout(() => {
            updateScore(++sc);
        }, 200)
        setTimeout(() => {
            checkWinner();
        }, 200);
    } else {
        unflipCards();
    } 
}

function updateScore(s) {
    sc = s;
    score.innerHTML = sc;
}



function checkWinner() {
    if (sc == 6) {
        alert("Congratulations! You have found all the matches.");
    }
}

function disableFlipping() {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);
    
    resetBoard();
}

function unflipCards() {
    lockBoard = true;

    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');

        resetBoard();
    }, 1500);
}

function resetBoard() {
    // destructuring assignment
    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
}

function restartGame() {
    resetBoard();

    updateScore(0);
    
    cards.forEach(card => card.classList.remove('flip'));
    
    cards.forEach(card => card.removeEventListener('click', flipCard));

    setTimeout(() => {
        shuffleCards();
    }, 300);

    setTimeout(() => {
        setCards();
    }, 500); 
}

function displayInstructions() {
    alert("Click on a card to flip it and try to find its match! Good luck and have fun!");
}