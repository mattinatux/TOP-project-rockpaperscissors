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
    // should take input, do the comparison with the computerplay and return "You Lose! Paper beats Rock"
    // get input from the user -- do they want rock paper or scissors
    // if user entry is not (case insensitive) rock, paper, or scissors, ask them to re-enter
    // figure out who wins
        // rock beats scissors
        // scissors beats paper
        // paper beats rock
        // store the winStatus=win/lose
        // store the winning choice winPick=playerSelection/computerSelection
        // store the losing choice losePick=playerSelection/computerSelection
    // set the declaration message (You <win/lose>! <winner> beats <loser>)
}