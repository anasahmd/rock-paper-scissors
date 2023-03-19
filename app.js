const getComputerChoice = () => {
  const choices = ['rock', 'paper', 'scissor'];
  const random = Math.floor(Math.random() * choices.length);
  return choices[random];
};

const playRound = (playerSelection, computerSelection) => {
  playerSelection = playerSelection.toLowerCase();
  if (playerSelection === computerSelection) {
    return {
      message: `It's a Tie! ${playerSelection} ties with ${computerSelection}`,
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

const game = () => {
  let playerScore = 0;
  let computerScore = 0;

  for (let i = 0; i < 5; i++) {
    let playerSelection = prompt();
    const { message, winner } = playRound(playerSelection, getComputerChoice());
    if (winner == 'player') {
      playerScore++;
    } else if (winner == 'computer') {
      computerScore++;
    }
    console.log(message);
  }

  if (playerScore > computerScore) {
    console.log('Player Wins!');
  } else if (computerScore < playerScore) {
    console.log('Computer Wins!');
  } else {
    console.log('Tie Game!');
  }
};

game();
