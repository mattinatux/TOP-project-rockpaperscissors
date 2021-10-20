// sets userRounds constant based on HTML form
 // = (document.querySelector('#roundsField')).value;
// variables used in playRPS and needed higher in scope
let playerSelection;
let computerSelection;
let winOrLose;
let userRounds
// variables needed for user output
let elementWin;
let elementLose;
let playerScore = 0;
let computerScore = 0;
let tieScore = 0;
let i = 0;

function computerPlay() {
    // should randomly return either "Rock", "Paper", or "Scissors"
    // choose a random number between 0 and 2
    let randomNumber = Math.floor(Math.random()*3);
    let result;
    // then switch the result to R, P, or S
    switch (randomNumber) {
        case 0:
            result = "Rock";
            break;
        case 1:
            result = "Paper";
            break;
        case 2:
            result = "Scissors";
            break;
        default:
            result = null
            console.log("Somehow you got a number outside of 0-2.")
            break;
    }
    // return the output
    computerSelection = result;
    return result;
}

function playRPS(playerSelection, computerSelection) {
    if ( ((playerSelection.toUpperCase() == "ROCK") && (computerSelection.toUpperCase() == "SCISSORS")) ||
         ((playerSelection.toUpperCase() == "SCISSORS") && (computerSelection.toUpperCase() == "PAPER")) ||
         ((playerSelection.toUpperCase() == "PAPER") && (computerSelection.toUpperCase() == "ROCK")) ) {
        winOrLose = "Win";
        i++;
        playerScore++;
    } else if (playerSelection.toUpperCase() == computerSelection.toUpperCase()) {
        winOrLose = "Tie";
        tieScore++;
    } else {
        winOrLose = "Lose";
        i++;
        computerScore++;
    }

    // Now, use the info we have to build our variables
    setWinningElements(winOrLose, playerSelection, computerSelection);

    // write it to the browser results div
    const htmlResults = document.querySelector('#results');
    
    htmlResults.textContent = `You chose... ${playerSelection}
        and the computer chose... ${computerSelection}!
        ${elementWin} beats ${elementLose}! You ${winOrLose}!
        The score is... YOU: ${playerScore}  COMPUTER: ${computerScore}  (${tieScore} ties).`
    
    console.log([winOrLose, playerSelection, computerSelection]);
}

function setWinningElements(whoWon, playerSelection, computerSelection) {
    if (whoWon == "Win") {
        elementWin = playerSelection;
        elementLose = computerSelection;
        // console.log('You ' + whoWon + '!\n\nYou chose:' + playerSelection + '\nComputer chose: ' + computerSelection);
    } else if (whoWon == "Lose") {
        elementWin = computerSelection;
        elementLose = playerSelection;
        // console.log('You ' + whoWon + '!\n\nYou chose: ' + playerSelection + '\nComputer chose: ' + computerSelection);
    } else if (whoWon == "Tie") {
        elementWin = "Nothing";
        elementLose = "anything in a tie!";
        // console.log('You ' + whoWon + '!\n\nYou chose: ' + playerSelection + '\nComputer chose: ' + computerSelection);
    } else {
        console.log('Error in setWinningElements logic');
    }
}

function clickRock() {
    playerSelection = "Rock";
    setRounds();
    if (i <= userRounds) {
        playRPS(playerSelection,computerPlay());
    } else {
        const playagaindiv = document.querySelector('#playagain');
        playagaindiv.textContent = `Game over, man! Refresh the page to play again. 
            Want more rounds? Increase the number before you start!`;
    }
}

function clickPaper() {
    playerSelection = "Paper";
    setRounds();
    if (i <= userRounds) {
        playRPS(playerSelection,computerPlay());
    } else {
        const playagaindiv = document.querySelector('#playagain');
        playagaindiv.textContent = `Game over, man! Refresh the page to play again. 
            Want more rounds? Increase the number before you start!`;
    }
}

function clickScissors() {
    playerSelection = "Scissors";
    setRounds();
    if (i <= userRounds) {
        playRPS(playerSelection,computerPlay());
    } else {
        const playagaindiv = document.querySelector('#playagain');
        playagaindiv.textContent = `Game over, man! Refresh the page to play again. 
            Want more rounds? Increase the number before you start!`;
    }
}

function setRounds() {
    if (playerScore==0 && tieScore==0 && computerScore==0) {
        userRounds = (document.querySelector('#roundsField')).value;
        i = 1;
    };
}

const buttonRock = document.querySelector('#buttonRock');
buttonRock.addEventListener('click', clickRock)

const buttonPaper = document.querySelector('#buttonPaper');
buttonPaper.addEventListener('click', clickPaper)

const buttonScissors = document.querySelector('#buttonScissors');
buttonScissors.addEventListener('click', clickScissors)