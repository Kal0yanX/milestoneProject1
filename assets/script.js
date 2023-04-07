const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const scoreboard = document.getElementById('scoreboard')
const possibleChoices = document.querySelectorAll('button')
const earth = document.getElementById('earth')

let userChoice
let computerChoice
let wins = 0
let losses = 0
let draws = 0

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
  userChoice = e.target.id
  userChoiceDisplay.innerHTML = userChoice
  generateComputerChoice()
  getResult()
  updateScore()
}))

function generateComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3) + 1

  if(randomNumber === 1) {
    computerChoice = 'water'
  }

  if(randomNumber === 2) {
    computerChoice = 'earth'
  }

  if(randomNumber === 3) {
    computerChoice = 'fire'
  }
  computerChoiceDisplay.innerHTML = computerChoice
}

function getResult () {
  if (computerChoice === userChoice) {
    result = 'Its a draw!'
    draws++
  }
  if (computerChoice === 'earth' && userChoice === "fire") {
    result = 'You lost!'
    losses++
  }
  if (computerChoice === 'earth' && userChoice === "air") {
    result = 'You win!'
    wins++
  }
  if (computerChoice === 'fire' && userChoice === "earth") {
    result = 'You lost!'
    losses++
  }
  if (computerChoice === 'fire' && userChoice === "water") {
    result = 'You win!'
    wins++
  }
  if (computerChoice === 'water' && userChoice === "fire") {
    result = 'You lost!'
    losses++
  }
  if (computerChoice === 'water' && userChoice === "earth") {
    result = 'You win!'
    wins++
  }
  resultDisplay.innerHTML = result

  
}

function updateScore() {
  scoreboard.innerHTML = `Wins: ${wins} Losses: ${losses} Draws: ${draws}`
}