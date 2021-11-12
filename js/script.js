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

function game() {
  for (let index = 0; index < 5; index++) {
    let playerSelection = prompt('Type: Rock, Paper, or Scissors')
    playerSelection = playerSelection.toLowerCase();
    const computerSelection = computerPlay()
    console.log(playRound(playerSelection, computerSelection))
  }
  if (playerScore > computerScore) {
    console.log(`You won! Final Score is ${playerScore} to ${computerScore}`);
  } else if (computerScore > playerScore) {
    console.log(`You lost! Final Score is ${playerScore} to ${computerScore}`);
  } else {
    console.log(`That's a tie! Final Score is ${playerScore} to ${computerScore}`);
  }
}

game();
