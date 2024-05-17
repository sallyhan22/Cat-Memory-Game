const cards = document.querySelectorAll('.memory-card');
const result = document.querySelector('#result');
let hasFlippedCard = false;
let firstCard, secondCard;
let lockBoard = false;

cards.forEach(card => card.addEventListener('click', flipCard));

// Immediately Invoked Expression (IIFE) will execute itself right after declaration
(function shuffle() {
    cards.forEach(card => {
        let randomIndex = Math.floor(Math.random() * 12);
        card.style.order = randomIndex;
    });
})();

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
        // update the score
    } else {
        unflipCards();
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

