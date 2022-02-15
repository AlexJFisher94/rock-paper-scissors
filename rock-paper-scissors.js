'use strict';

const gameChoices = ['rock', 'paper', 'scissors'];
let playerScore = 0;
let computerScore = 0;
let result;

//randomly generates a choice for computer
function computerPlay() {
    let computerSelection = gameChoices[Math.floor(Math.random() * gameChoices.length)];
    return computerSelection;
}

//gets player's choice
function getPlayerChoice(userInput) {
    userInput = prompt('Rock, paper, or scissors?');
    let playerChoice = userInput.toLowerCase();
    if (playerChoice === 'rock' || playerChoice === 'paper' || playerChoice === 'scissors') {
        return playerChoice
    } else {
    return 'Oops! Try again.';
  }
}

//plays a single round of rock, paper, scissors
function playRound(playerSelection, computerSelection) {
    playerSelection = getPlayerChoice();
    computerSelection = computerPlay();
    if (playerSelection === computerSelection) {
        result = 'tie';
        return 'It\'s a draw!';
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        result = 'lose';
        return 'You lose! Paper beats rock.';
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        result = 'win';
        return 'You win! Rock beats scissors.';
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        result = 'lose';        
        return 'You lose! Scissors beats paper.';
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        result = 'win';
        return 'You win! Paper beats rock.';
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        result = 'lose';
        return 'You lose! Rock beats scissors.';
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        result = 'win';
        return 'You win! Scissors beats paper.';
  }
}

//plays a full game of rock, paper, scissors (5 rounds)
function game() {
    for (let i = 0; i < 5; i++) {
        console.log(playRound());
    if (result === 'win') {
        ++playerScore;
    } else if (result === 'lose') {
        ++computerScore;
    }
}
     displayWinner();
}

//calculates and displays winner of game
function displayWinner() {
if (playerScore > computerScore) {
    console.log('Player wins!');
} else if (playerScore < computerScore) {
    console.log('Computer wins!');
} else if (playerScore === computerScore) {
    console.log('It\'s a draw! Nobody wins.');
  }
}

game();

console.log(playerScore, computerScore);