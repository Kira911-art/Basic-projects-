const scored = {
  wins: 0,
  lose: 0,
  Tie: 0,
};

update_score();

function update_score() {
  document.querySelector(
    ".show_score"
  ).innerHTML = `You Wins: ${scored.wins}, You Losses: ${scored.lose}, You Ties: ${scored.Tie}`;
}
function pickMove() {
  let computerMove = "";
  const randomNumber = Math.random();
  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerMove = "Rock";
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerMove = "Paper";
  } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
    computerMove = "Scissors";
  }
  return computerMove;
}
function gameMove(playerMove) {
  const computerMove = pickMove();
  let result = "";
  if (playerMove === "Rock") {
    if (computerMove === "Rock") {
      result = "Tie";
    } else if (computerMove === "Paper") {
      result = "You Lose";
    } else if (computerMove === "Scissors") {
      result = "You win";
    }
  } else if (playerMove === "Paper") {
    if (computerMove === "Rock") {
      result = "You win";
    } else if (computerMove === "Paper") {
      result = "Tie";
    } else if (computerMove === "Scissors") {
      result = "You Lose";
    }
  } else if (playerMove === "Scissors") {
    if (computerMove === "Rock") {
      result = "You Lose";
    } else if (computerMove === "Paper") {
      result = "You win";
    } else if (computerMove === "Scissors") {
      result = "Tie";
    }
  }
  if (result === "You win") {
    scored.wins++;
  } else if (result === "You Lose") {
    scored.lose++;
  } else if (result === "Tie") {
    scored.Tie++;
  }
  update_score();
  document.querySelector(".score_result").innerHTML = result;
  document.querySelector(".Players_move").innerHTML = `
    You <img src="images/${playerMove}-emoji.png" alt="${playerMove}" class="Game_icon">
    <img src="images/${computerMove}-emoji.png" alt="${computerMove}" class="Game_icon"> Computer
  `;
}
