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
    return result;
}

// Test for computerPlay function
// console.log("hi");
// console.log(computerPlay());
// console.log("bye");

function playRPS(playerSelection, computerSelection) {
    // should take input, do the comparison with the computerplay
    // and return "You <Win/Lose>! <ELEMENT> beats <ELEMENT>"

    // 1. Declare my variables: winner, elementWin, elementLose
    // Decided to declare them as globals b/c scope. Was that necessary?

    // 2. Compare playerSelection to computerSelection (case insensitive)
    // TODO: CASE INSENSITIVE HANDLING, maybe right after userInput stand alone so I don't have to do that mess in here.
        // rock beats sissors
        // scissors beats paper
        // paper beats rock
        
        // if playerSelection = Rock and computerSelection is Paper
            // winOrLose = "win"
            // elementWin = playerSelection - do this later with setWinningElements function, pass in playerSelection with correct casing
            // elementLose = computerSelection - do this later with setWinning Elements function, pass in computerSelection (cased correctly already)

    if ( ((playerSelection.toUpperCase() == "Rock") && (computerSelection.toUpperCase() == "Scissors")) ||
         ((playerSelection.toUpperCase() == "Scissors") && (computerSelection.toUpperCase() == "Paper")) ||
         ((playerSelection.toUpperCase() == "Paper") && (computerSelection.toUpperCase() == "Rock")) ) {
        winOrLose = "Win";
    } else if (playerSelection.toUpperCase() == computerSelection.toUpperCase()) {
        winOrLose = "Tie";
    } else {
        winOrLose = "Lose";
    }

    // Now, use the info we have to build our variables
    setWinningElements(winOrLose, playerSelection, computerSelection);
    return [winOrLose, playerSelection, computerSelection];
}

function setWinningElements(whoWon, playerSelection, computerSelection) {
    if (whoWon == "Win") {
        elementWin = playerSelection;
        elementLose = computerSelection;
    } else if (whoWon == "Lose") {
        elementWin = computerSelection;
        elementLose = playerSelection;
    } else if (whoWon == "Tie") {
        elementWin = "Nothing";
        elementLose = "anything in a tie!";
    } else {
        console.log('Error in setWinningElements logic');
    }

    // this wasn't actually needed. two reasons, I think:
        // 1. technically we have the info in global variables
        // 2. we're returning the info in the playRPS() function
    // return [whoWon, elementWin, elementLose];
}

// Declaring global variables to be used in playRPS
// and setWinningElements
// and in output to user
let winOrLose;
let elementWin;
let elementLose;

// Get input from user and invoke the playRPS game
let userInput = prompt("What say you, chap?\n\nRock, Paper, or Scissors?","Type your choice here");

// Testing the playRPS and setWinningElements functions
// console.log(playRPS(userInput,computerPlay()));
// console.log("You " + winOrLose + ". " + elementWin + " beats " + elementLose);