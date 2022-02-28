'use strict';


let rounds = document.querySelector('#round');
let winsLosses = document.querySelector('#wins-losses');
let playerScore = 0;
let computerScore = 0;
let computerSelection;
let playerSelection;
let round = 0;
const weaponsButtons = document.querySelectorAll('.weapons');
const hammer = document.querySelector('#hammer');
const armor = document.querySelector('#armor');
const spear = document.querySelector('#spear');
const battleAlerts = document.querySelector('#battle-alert')
const enemyChoice = document.querySelector('#enemy-choice');
const playAgain = document.querySelector('.play-again');

// counts rounds
function countRounds () {
    round += 1;
    rounds.textContent = `Round: ${round}`;
    return round;
}


//randomly generates a choice for computer
function computerPlay() {
    const gameChoices = ['Hammer', 'Armor', 'Spear'];
    let computerSelection = gameChoices[Math.floor(Math.random() * gameChoices.length)];
    enemyChoice.textContent = computerSelection
    return computerSelection;
};

// starts game and gets player's choice
function playGame () {
    let playerSelection;
  weaponsButtons.forEach((weapon) => {
    weapon.addEventListener('click', () => {
      if (weapon.classList.contains('hammer')) {
      playerSelection = 'Hammer';
      } else if (weapon.classList.contains('armor')) {
      playerSelection = 'Armor';
      } else {
      playerSelection = 'Spear';
      }
      computerSelection = computerPlay();
      countRounds();
      playRound(playerSelection, computerSelection);
      displayWinner(playerScore, computerScore);
      endGame(playerScore, computerScore);
      resetGame();
      console.log(playerSelection, computerSelection);
    });
  });
}


// plays one round
function playRound (playerSelection, computerSelection) {
    switch (true) {
        case (playerSelection === computerSelection):
            battleAlerts.textContent = 'It\'s a tie.';
        break;
        case (playerSelection === 'Hammer' && computerSelection === 'Armor'):
        case (playerSelection === 'Armor' && computerSelection === 'Spear'):
        case (playerSelection === 'Spear' && computerSelection === 'Hammer'):
            playerScore++;
            winsLosses.textContent = `Wins: ${playerScore} | Losses: ${computerScore}`;
            battleAlerts.textContent = 'You win.';
        break;
        default:
            computerScore++;
            winsLosses.textContent = `Wins: ${playerScore} | Losses: ${computerScore}`;
            battleAlerts.textContent = 'You lose.';
    }
}

function displayWinner (playerScore, computerScore) {
    if (playerScore === 5) {
    battleAlerts.textContent = 'Victory. It looks like you\'ll live to see another day.'
    } else if (computerScore === 5) {
        battleAlerts.textContent = 'Defeat. It looks like this battle was too much for you.'
    }
}


function endGame (playerScore, computerScore) {
    if (playerScore === 5 || computerScore === 5) {
        weaponsButtons.forEach((button) => {
            button.setAttribute('disabled', '');
            button.classList.remove('focus');
            playAgain.removeAttribute('hidden');
          });
    }
}

function resetGame () {
    playAgain.addEventListener('click', () => {
        window.location.reload();
      });
    }



playGame();





