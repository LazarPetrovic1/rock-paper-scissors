const userScoreEl = document.getElementById("user-score");
const cpuScoreEl = document.getElementById("cpu-score");
let userScore = 0,
  cpuScore = 0;
const indicator = document.getElementById("indicator");
const r = document.getElementById("r");
const s = document.getElementById("s");
const p = document.getElementById("p");

function getComputerChoice() {
  const choices = ["r", "s", "p"];
  const random = Math.floor(Math.random() * choices.length);
  return choices[random];
}

function game(userChoice) {
  const computerChoice = getComputerChoice();
  console.log(userChoice, computerChoice);
  switch (userChoice + computerChoice) {
    case "rs":
    case "pr":
    case "sp":
      win(userChoice, computerChoice);
      break;
    case "rp":
    case "ps":
    case "sr":
      lose(userChoice, computerChoice);
      break;
    case "rr":
    case "pp":
    case "ss":
      draw(userChoice, computerChoice);
      break;
  }
}

function convert(letter) {
  if (letter === "r") {
    return "Rock";
  } else if (letter === "p") {
    return "Paper";
  } else if (letter === "s") {
    return "Scissors";
  }
}

function win(userChoice, computerChoice) {
  userScore++;
  userScoreEl.innerHTML = userScore;
  indicator.innerHTML = `${convert(userChoice)} beats ${convert(
    computerChoice
  )}. You win!`;
  document.getElementById(userChoice).classList.add("green-glow");
  document.getElementById(computerChoice).classList.add("red-glow");
  setTimeout(() => {
    document.getElementById(userChoice).classList.remove("green-glow");
  }, 500);
  setTimeout(() => {
    document.getElementById(computerChoice).classList.remove("red-glow");
  }, 500);
}

function lose(userChoice, computerChoice) {
  cpuScore++;
  cpuScoreEl.innerHTML = cpuScore;
  indicator.innerHTML = `${convert(computerChoice)} beats ${convert(
    userChoice
  )}. You lose!`;
  document.getElementById(userChoice).classList.add("red-glow");
  document.getElementById(computerChoice).classList.add("green-glow");
  setTimeout(() => {
    document.getElementById(userChoice).classList.remove("red-glow");
  }, 500);
  setTimeout(() => {
    document.getElementById(computerChoice).classList.remove("green-glow");
  }, 500);
}

function draw(userChoice, computerChoice) {
  indicator.innerHTML = "It's a draw!";
  document.getElementById(userChoice).classList.add("gray-glow");
  setTimeout(() => {
    document.getElementById(userChoice).classList.remove("gray-glow");
  }, 500);
}

function main() {
  r.addEventListener("click", () => {
    game("r");
  });
  p.addEventListener("click", () => {
    game("p");
  });
  s.addEventListener("click", () => {
    game("s");
  });
}

main();
