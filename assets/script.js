const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const scoreboard = document.getElementById('scoreboard')
const possibleChoices = document.querySelectorAll('button')
const imageContainer = document.getElementById('comp-image-container')
const imageContainer2 = document.getElementById('user-image-container')
let userChoice
let computerChoice
let wins = 0
let losses = 0
let draws = 0

//adding an event Listener for the 'click' option
possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
  userChoice = e.target.id
  userChoiceDisplay.innerHTML = userChoice
  generateComputerChoice()
  getResult()
  updateScore()
  compChoiceImage()
  userChoiceImage()
}))

//creating a computer choice using Math.random
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

//getting the result of each decision function
function getResult () {
  if (computerChoice === userChoice) {
    result = 'Its a draw!'
    draws++
  }
  if (computerChoice === 'earth' && userChoice === "fire") {
    result = 'You lost!'
    losses++
  }
  if (computerChoice === 'earth' && userChoice === "fire") {
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

//updating the score
function updateScore() {
  scoreboard.innerHTML = `Wins: ${wins} Losses: ${losses} Draws: ${draws}`
}

// adding an image on the computers choice
function compChoiceImage() {
  if (computerChoice === 'earth') {
    imageContainer.innerHTML = `<img src="assets/photos/earth2.jpg" alt="earth2 image" style="width: 200px; height: 150px;">`
  } else if (computerChoice === 'water') {
    imageContainer.innerHTML = `<img src="assets/photos/water2.jpg" alt="water2 image" style="width: 200px; height: 150px;">`
  } else if (computerChoice === 'fire') {
    imageContainer.innerHTML = `<img src="assets/photos/fire2.jpg" alt="fire2 image" style="width: 200px; height: 150px;">`
  } else {
    imageContainer.innerHTML = ''
  }
}

//adding an image on the users choice
function userChoiceImage() {
  if (userChoice === 'earth') {
    imageContainer2.innerHTML = `<img src="assets/photos/earth.jpg" alt="earth image" style="width: 200px; height: 150px;">`
  } else if (userChoice === 'water') {
    imageContainer2.innerHTML = `<img src="assets/photos/water.jpg" alt="water image" style="width: 200px; height: 150px;">`
  } else if (userChoice === 'fire') {
    imageContainer2.innerHTML = `<img src="assets/photos/fire.jpg" alt="fire image" style="width: 200px; height: 150px;">`
  } else {
    imageContainer2.innerHTML = ''
  }
}

