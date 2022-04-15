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
  operationNumber, newResult) {
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

function calculateResult(calculationType) {
  const enteredNumber = getUserNumberInput()
  const initialResult = currentResult
  if (calculationType === 'ADD') {
    currentResult += enteredNumber
  } else if (calculationType === 'SUB') {
    currentResult -= enteredNumber
  } else if (calculationType === 'MUL') {
    currentResult *= enteredNumber
  } else if (calculationType === 'DIV') {
    currentResult /= enteredNumber
  } else {
    console.log("The calculationType is wrong!!!")
  }

  createAndWriteLog('+', initialResult, enteredNumber)
  writeToLog('ADD', initialResult, enteredNumber, currentResult)
}

function add() {
  calculateResult('ADD');
}

function subtract() {
  calculateResult('SUB');
}

function multiply() {
  calculateResult('MUL');
}

function divide() {
  calculateResult('DIV');
}

addBtn.addEventListener('click', add)
subtractBtn.addEventListener('click', subtract)
multiplyBtn.addEventListener('click', multiply)
divideBtn.addEventListener('click', divide)
