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

function writeToLog(operationIdentifier, prevResult, 
                    operationNumber,newResult) {
  const logEntry = {
    operation: operationIdentifier,
    prevResult: prevResult,
    operationNumber: operationNumber,
    newResult: newResult
  }
  logEntries.push(logEntry)
  console.log(logEntry.number)
  console.log(logEntries)  
  
}

function add() {
  const enteredNumber = getUserNumberInput()
  const initialResult = currentResult
  currentResult += parseInt(enteredNumber)
  createAndWriteLog('+', initialResult, enteredNumber)
  writeToLog('ADD', initialResult, enteredNumber, currentResult)
}

function subtract() {
  const enteredNumber = getUserNumberInput()
  const initialResult = currentResult
  currentResult -= parseInt(enteredNumber)
  createAndWriteLog('-', initialResult, enteredNumber)
  writeToLog('SUB', initialResult, enteredNumber, currentResult)
}

function multiply() {
  const enteredNumber = getUserNumberInput()
  const initialResult = currentResult
  currentResult *= parseInt(enteredNumber)
  createAndWriteLog('*', initialResult, enteredNumber)
  writeToLog('MUL', initialResult, enteredNumber, currentResult)
}

function divide() {
  const enteredNumber = getUserNumberInput()
  const initialResult = currentResult
  currentResult /= parseInt(enteredNumber)
  createAndWriteLog('/', initialResult, enteredNumber)
  writeToLog('DIV', initialResult, enteredNumber, currentResult)
}

addBtn.addEventListener('click', add)
subtractBtn.addEventListener('click', subtract)
multiplyBtn.addEventListener('click', multiply)
divideBtn.addEventListener('click', divide)
