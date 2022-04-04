const task3Element = document.getElementById('task-3')

function firstFunction() {
  alert("This is the first function!")
}

function secondFunction(name) {
  alert(name)
}

function threeFunction(parameter1, parameter2, parameter3) {
  return " P3 " + parameter3 + " P2 " + parameter2 + " P1 " + parameter1
}

firstFunction()
secondFunction("Marius")

task3Element.addEventListener('click', firstFunction)


alert(threeFunction("Ionut", "Marius", "Pop"))