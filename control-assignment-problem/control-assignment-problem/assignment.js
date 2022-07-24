const randomNumber = Math.random(); // produces random number between 0 (including) and 1 (excluding)

if(randomNumber > 0.7) {
  alert(`The number is ${randomNumber}`)
}

myArray = [1, 2, 3, 4, 5]

for(let i = 0; i < myArray.length; i++) {
  console.log(myArray[i])
}

for(const i of myArray) {
  console.log(i)
}

const randomNumber1 = Math.random()

if( (randomNumber > 0.7 && randomNumber1 > 0.7) || 
randomNumber <= 0.2 ||
randomNumber <= 0.2 ){
  alert(`The number1 is ${randomNumber} and the number2 is ${randomNumber1}`)
}