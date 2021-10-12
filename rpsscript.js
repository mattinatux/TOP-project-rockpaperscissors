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
    let whoWins;
    let whatWins;
    let whatLoses;
    // should take input, do the comparison with the computerplay and return "You Lose! Paper beats Rock"
    // convert user input to Capital first lowercase remainder
    let playerTitleCase = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(0).toLowerCase();
    
    // if user entry is not (case insensitive) rock, paper, or scissors, ask them to re-enter
    // if (!(playerTitleCase == "Rock") || (playerTitleCase == "Paper") || (playerTitleCase == "Scissors")) {
    //     console.log("Improper user entry. Exiting.");
    // }
    
    // figure out who wins
        // rock beats scissors
            // if playerTitleCase is ROCK and computerSelection is SCISSORS then set WIN variables
            // if playerTitleCase is ROCK and computerSelection is PAPER then set LOSE variables
        if (playerTitleCase === "Rock" && computerSelection === "Scissors") {
            let whoWins = "win";
            whatWins = playerTitleCase;
            whatLoses = computerSelection;
        } else if (playerTitleCase === "Rock" && computerSelection === "Paper") {
            let whoWins = "lose";
            whatWins = computerSelection;
            whatLoses = playerTitleCase;
        }
        // scissors beats paper
            // if playerTitleCase is SCISSORS and computerSelection is PAPER then set WIN variables
            // if playerTitleCase is SCISSORS and computerSelection is ROCK then set LOSE variables
        if (playerTitleCase === "Scissors" && computerSelection === "Paper") {
            let whoWins = "win";
            whatWins = playerTitleCase;
            whatLoses = computerSelection;
        } else if (playerTitleCase === "Scissors" && computerSelection === "Rock") {
            let whoWins = "lose";
            whatWins = computerSelection;
            whatLoses = playerTitleCase;
        }
        // paper beats rock
            // if playerTitleCase is PAPER and computerSelection is ROCK then set WIN variables
            // if playerTitleCase is PAPER and computerSelection is SCISSORS then set LOSE variables
        if (playerTitleCase === "Paper" && computerSelection === "Rock") {
            let whoWins = "win";
            whatWins = playerTitleCase;
            whatLoses = computerSelection;
        } else if (playerTitleCase === "Paper" && computerSelection === "Scissors") {
            let whoWins = "lose";
            whatWins = computerSelection;
            whatLoses = playerTitleCase;
        }

    // set the declaration message (You <win/lose>! <winner> beats <loser>)
    let message = "You " + whoWins + "! " + whatWins + " beats " + whatLoses;
    return message;
}

let userInput = prompt("What say you, chap?\nRock, Paper, or Scissors?","Type your choice here");
playRPS(userInput,computerPlay())