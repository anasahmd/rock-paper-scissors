const getComputerChoice = () => {
  const choices = ['rock', 'paper', 'scissor'];
  const random = Math.floor(Math.random() * choices.length);
  return choices[random];
};

const playRound = (playerSelection, computerSelection) => {
  playerSelection = playerSelection.toLowerCase();
  if (playerSelection === computerSelection) {
    return `It's a Tie! ${playerSelection} ties with ${computerSelection}`;
  }
  if (playerSelection === 'rock') {
    if (computerSelection === 'paper') {
      return 'You Lose! Paper beats Rock';
    } else {
      return 'You Win! Rock beats Scissors';
    }
  } else if (playerSelection === 'paper') {
    if (computerSelection === 'rock') {
      return 'You Win! Paper beats Rock';
    } else {
      return 'You Lose! Scissors beats Paper';
    }
  } else if (playerSelection === 'scissors') {
    if (computerSelection === 'rock') {
      return 'You Lose! Rock beats Scissors';
    } else {
      return 'You Win! Scissors beats Paper';
    }
  }
};

const playerSelection = 'Rock';
const computerSelection = getComputerChoice();

console.log(playRound(playerSelection, computerSelection));
