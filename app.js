const btns = document.querySelectorAll('button');
const resultDiv = document.getElementById('result');

let playerScore = 0;
let computerScore = 0;

for (let btn of btns) {
  btn.addEventListener('click', () => {
    btnFunction(btn.getAttribute('data-choice'));
  });
}

const btnFunction = (p) => {
  resultDiv.innerHTML = '';

  let computerChoice = getComputerChoice();
  let playerChoice = p;
  const { message, winner } = playRound(playerChoice, computerChoice);

  if (winner == 'player') {
    playerScore++;
  } else if (winner == 'computer') {
    computerScore++;
  }
  const roundResult = document.createElement('div');
  roundResult.textContent = `${message}`;
  resultDiv.appendChild(roundResult);

  const playerDiv = document.createElement('div');
  playerDiv.textContent = `Player Score: ${playerScore}`;
  resultDiv.appendChild(playerDiv);

  const computerDiv = document.createElement('div');
  computerDiv.textContent = `Computer Score: ${computerScore}`;
  resultDiv.appendChild(computerDiv);

  if (playerScore >= 5 || computerScore >= 5) {
    const finalResult = document.createElement('div');
    if (playerScore == 5) {
      finalResult.textContent =
        'You won the game! Reload the page to play again!';
    }
    if (computerScore == 5) {
      finalResult.textContent =
        'Computer won the game! Reload the page to play again!';
    }
    resultDiv.appendChild(finalResult);
    for (let btn of btns) {
      btn.disabled = true;
    }
  }
};

const getComputerChoice = () => {
  const choices = ['rock', 'paper', 'scissor'];
  const random = Math.floor(Math.random() * choices.length);
  return choices[random];
};

const playRound = (playerSelection, computerSelection) => {
  playerSelection = playerSelection.toLowerCase();
  if (playerSelection === computerSelection) {
    return {
      message: `It's a Tie! You both chose ${playerSelection}`,
      winner: 'none',
    };
  }
  if (playerSelection === 'rock') {
    if (computerSelection === 'paper') {
      return { message: 'You Lose! Paper beats Rock', winner: 'computer' };
    } else {
      return { message: 'You Win! Rock beats Scissors', winner: 'player' };
    }
  } else if (playerSelection === 'paper') {
    if (computerSelection === 'rock') {
      return { message: 'You Win! Paper beats Rock', winner: 'player' };
    } else {
      return { message: 'You Lose! Scissors beats Paper', winner: 'computer' };
    }
  } else if (playerSelection === 'scissors') {
    if (computerSelection === 'rock') {
      return { message: 'You Lose! Rock beats Scissors', winner: 'computer' };
    } else {
      return { message: 'You Win! Scissors beats Paper', winner: 'player' };
    }
  } else {
    return { message: 'Invalid input', winner: 'none' };
  }
};
