let computerScore = 0;
let playerScore = 0;

function computerPlay() {
  let number = Math.floor(Math.random() * 3) + 1;
  if (number === 1) {
    return 'Rock';
  } else if (number === 2) {
    return 'Paper';
  } else {
    return 'Scissors';
  }
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection == 'rock') {
    if (computerSelection === 'Scissors') {
      playerScore++;

      return `You Win! Rock breaks Scissors.`;
    }
    if (computerSelection === 'Paper') {
      computerScore++;

      return `You Lose! Paper covers rock.`;
    }
  } else if (playerSelection == 'paper') {
    if (computerSelection === 'Scissors') {
      computerScore++;

      return `You Lose! Scissors cuts Paper.`;
    }
    if (computerSelection === 'Rock') {
      playerScore++;

      return `You Win! Paper covers rock.`;
    }
  } else if (playerSelection == 'scissors') {
    if (computerSelection === 'Rock') {
      computerScore++;

      return `You Lose! Rock breaks Scissors.`;
    }
    if (computerSelection === 'Paper') {
      playerScore++;

      return `You Win! Scissors cuts Paper.`;
    }
  }

  return `Draw! Please try Again!`;
}

const container = document.querySelector('#container');
const playerScoreContainer = document.createElement('div');
const computerScoreContainer = document.createElement('div');
const roundResultDiv = document.createElement('div');
const finalScoreDiv = document.createElement('div');
playerScoreContainer.innerHTML = 'Your score: <span id="player-score">0</span>';
computerScoreContainer.innerHTML = 'Computer score: <span id="computer-score">0</span>';
const buttons = document.querySelectorAll('button');
container.appendChild(playerScoreContainer);
container.appendChild(computerScoreContainer);
container.appendChild(roundResultDiv);
container.appendChild(finalScoreDiv);

const playerScoreElement = playerScoreContainer.querySelector('#player-score');
const computerScoreElement = computerScoreContainer.querySelector('#computer-score');

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    let playerSelection = button.id;
    const computerSelection = computerPlay();
    roundResultDiv.textContent = playRound(playerSelection, computerSelection);

    playerScoreElement.textContent = playerScore;
    computerScoreElement.textContent = computerScore;
    if (playerScore > 4 || computerScore > 4) {
      finalScoreDiv.textContent = completeGame(playerScore, computerScore);
      container.removeChild(roundResultDiv);
      disableButtons(buttons);
    }
  });
});

function completeGame(playerScore, computerScore) {
  if (playerScore > computerScore) {
    return `You won! Final Score is ${playerScore} to ${computerScore}`;
  } else if (computerScore > playerScore) {
    return `You lost! Final Score is ${playerScore} to ${computerScore}`;
  } else {
    return `That's a tie! Final Score is ${playerScore} to ${computerScore}`;
  }
}

function disableButtons(buttons) {
  buttons.forEach((button) => {
    container.removeChild(button);
  });
}
