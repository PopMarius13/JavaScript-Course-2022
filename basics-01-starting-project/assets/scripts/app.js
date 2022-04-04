const defaultResult = 0
let currentResult = defaultResult
let logEntries = []

// Gets input from input field
function getUserNumberInput() {
  return parseInt(userInput.value)
}

// Generates and writes calculation log
function createAndWriteLog(operator, resultBeforeCalc, calcNumber) {
  const calculationDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`
  outputResult(currentResult, calculationDescription) // from vendor.js file
}

function add() {
  const enteredNumber = getUserNumberInput()
  const initialResult = currentResult
  currentResult += parseInt(enteredNumber)
  createAndWriteLog('+', initialResult, enteredNumber)
  const logEntry = {
    operation: "ADD",
    prevResult: initialResult,
    number: enteredNumber,
    result: currentResult
  }
  logEntries.push(logEntry)
  console.log(logEntry.number)
  console.log(logEntries)
}

function subtract(){
  const enteredNumber = getUserNumberInput()
  const initialResult = currentResult
  currentResult -= parseInt(enteredNumber)
  createAndWriteLog('-', initialResult, enteredNumber)
}

function multiply() {
  const enteredNumber = getUserNumberInput()
  const initialResult = currentResult
  currentResult *= parseInt(enteredNumber)
  createAndWriteLog('*', initialResult, enteredNumber)
}

function divide() {
  const enteredNumber = getUserNumberInput()
  const initialResult = currentResult
  currentResult /= parseInt(enteredNumber)
  createAndWriteLog('/', initialResult, enteredNumber)
}

addBtn.addEventListener('click', add)
subtractBtn.addEventListener('click', subtract)
multiplyBtn.addEventListener('click', multiply)
divideBtn.addEventListener('click', divide)
