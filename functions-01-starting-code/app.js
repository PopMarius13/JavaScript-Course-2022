// const start = function () {
//   console.log('Game is starting...')
// }

/// method vs function

  // const person = {
  //   firstName: 'Max', //property
  //   green: function green() { /// method
  //     console.log('Hello there!')
  //   }
  // }

  // person.green() // function in a object -> method
  // console.log(person.firstName) // property

  // startGame()

  // console.dir(startGame) //more information about function -> functions are objects

/// function functionName() {} or () => {}

const startGameBtn = document.getElementById('start-game-btn');

const ROCK = 'ROCK'
const PAPER = 'PAPER'
const SCISSORS = 'SCISSORS'
const DEFAULT_USER_CHOICE = ROCK
const RESULT_DRAW = 'DRAW'
const RESULT_PLAYER_WINS = 'PLAYER_WINS'
const RESULT_COMPUTER_WINS = 'COMPUTER_WINS'

let gameIsRunning = false

const getPlayerChoice = () => {
  const selection = prompt(`${ROCK}, ${SCISSORS} or ${PAPER}`, '').toUpperCase()
  if (selection !== ROCK &&
      selection !== PAPER &&
      selection !== SCISSORS) {
    alert(`Invalid choice! We chose ${DEFAULT_USER_CHOICE} for you!`)
    return DEFAULT_USER_CHOICE
  }
  return selection
}

const getComputerChoice = () => {
  const randomValue = Math.random()
  if (randomValue < 0.34) {
    return ROCK
  } else if (randomValue < 0.67) {
    return SCISSORS
  }
  return PAPER
}

// const add = (a, b) => a + b

const getWinner = (computerChoice, playerChoice) => 
  computerChoice === playerChoice ? 
    RESULT_DRAW : 
    (computerChoice === ROCK && playerChoice === PAPER || 
    computerChoice === PAPER && playerChoice === SCISSORS || 
    computerChoice === SCISSORS && playerChoice === ROCK) ? 
      RESULT_PLAYER_WINS : 
      RESULT_COMPUTER_WINS
  
  // if (computerChoice === playerChoice) {
  //   return RESULT_DRAW
  // } else if (computerChoice === ROCK && playerChoice === PAPER || 
  //   computerChoice === PAPER && playerChoice === SCISSORS || 
  //   computerChoice === SCISSORS && playerChoice === ROCK) { 
  //   return RESULT_PLAYER_WINS
  // } else {
  //   return RESULT_COMPUTER_WINS
  // }


startGameBtn.addEventListener('click', () => {
  if (gameIsRunning) {
    return
  }
  gameIsRunning = true
  console.log('Game is starting...')
  const playerChoice = getPlayerChoice()
  const computerChoice = getComputerChoice()
  const winner = getWinner(computerChoice, playerChoice)
  console.log(winner)
})
 

