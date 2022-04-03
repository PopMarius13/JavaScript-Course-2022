const defaultResult = 0
let currentResult = defaultResult

function add(num1, num2) {
  const result = num1 + num2
  alert('The result is ' + result)
}

add(1, 2)
add(3, 4)

let calculationDescription = '(' + currentResult + ' + 10) * 3 / 2 - 1'
calculationDescription = `(${currentResult}  + 10) * 3 / 2 - 1`

currentResult = (currentResult + 10) * 3 / 2 - 1

outputResult(currentResult, calculationDescription)