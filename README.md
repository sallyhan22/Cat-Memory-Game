# Cat Memory Game
A cat-themed memory game where the goal of the users is to find all the matching cards! The game is won when all cards have been correctly matched.


https://github.com/sallyhan22/cat-memory-game/assets/122143742/4181fdff-8d0c-4c68-be24-338ca9b34961



## How It's Made

**Tech used:** HTML, CSS, JavaScript

- Utilized responsive web design principles to design the gameboard and the layout of the game screen in HTML and CSS
- JavaScript was used to manipulate HTML elements according to the core functionalities required for the game (e.g. shuffling and flipping cards)
- JavaScript was also used to check the conditions of the gameboard in response to user activity (e.g. checking for matches)


## Optimizations
1. Ensuring synchronicity when restarting the game
   - Currently, I utilize setTimeOuts in order to delay certain events (e.g. flipping of cards is disabled until cards have been shuffled), as I noticed that the UI didn't update in       the correct order
   - This bug can be seen if users click on the restart button and then a card extremely quickly, but it is unnoticed for average to fast speeds of these clicking movements
   - This could mean potentially introducing some asynchronous code/functions to ensure that certain behaviour is blocked until others have finished, and not relaying on time delays
     
2. Changing the data structure used to store the cards
   - Currently, each card is represented by its own HTML element, which means the number of cards in a given game must be determined before it starts (i.e. before the user runs the program)
   - Using another data structure (like a JavaScipt array), would allow for more dynamic game-play, as users would be able to choose how many cards they want to play with at the start of each game


## References: 
Game logic: https://marina-ferreira.github.io/tutorials/js/memory-game/   \
Checkered background: http://tiny.cc/d4d5yz 

\
All images were taken by me at the [RAPS Cat Sanctuary](https://www.rapsbc.com/cat-sanctuary/)!
