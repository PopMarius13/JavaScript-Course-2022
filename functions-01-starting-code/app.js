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
    return
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

const getWinner = (computerChoice, playerChoice = DEFAULT_USER_CHOICE) =>  
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
  let message = `You picked ${playerChoice || DEFAULT_USER_CHOICE}, computer picked ${computerChoice}, therefore you `

  let winner = getWinner(computerChoice, playerChoice) /// only for undefined value 
  // if (playerChoice) {
  //   winner = getWinner(computerChoice, playerChoice)
  // } else {
  //   winner = getWinner(computerChoice)
  // }
  if (winner === RESULT_DRAW) {
    message += 'had a draw.'
  } else if (winner === RESULT_PLAYER_WINS) {
    message += 'won.'
  } else {
    message += 'lost.'
  }

  alert(message)
  gameIsRunning = false
})

/// not related to game
/// rest parameters
const sumUp = (numbers) => {
  let sum = 0
  for (const num of numbers) {
    sum += num
  }
  return sum
}

const sumUp1 = (resultHandler, ...numbers) => {
  const validateNumber = (number) => {
    return isNaN(number) ? 0 : number
  }
  
  let sum = 0
  for (const num of numbers) {
    sum += validateNumber(num)
  }
  resultHandler(sum)
}


const combine = (resultHandler, operation, ...numbers) => {
  const validateNumber = (number) => {
    return isNaN(number) ? 0 : number
  }
  
  let sum = 0
  for (const num of numbers) {
    if (operation === 'ADD') {
      sum += validateNumber(num)
    } else if (operation === 'SUB'){
      sum -= validateNumber(num)
    }
  }
  resultHandler(sum, )
}

const subtractUp = function() {
  let sum = 0
  for (const num of arguments) { /// don't use that
    sum -= num
  }
  return sum
}

const subtractUp1 = (resultHandler, ...numbers) => {
  let sum = 0
  for (const num of numbers) { /// don't use that
    sum -= num
  }
  resultHandler(sum, 'The result after adding all numbers is')
}

const showResult = (messageText, result) => {
  alert(messageText + ' ' + result)
}

console.log(sumUp([1, 5, 10, -3, 6]))
sumUp1(showResult, 1, 5, 10, -3, 6, 25, 188)

console.log(subtractUp(1, 5, 10, -3, 6, 25, 188))

combine(showResult.bind(this, 'The result after adding all numbers is:'), 'ADD', 1, 5, 6, 7, 7, 8)
combine(showResult.bind(this, 'The result after subtracting all numbers is:'), 'SUB', 1, 5, 6, 7, 7, 8)

// showResult.call() 
// showResult.apply()

