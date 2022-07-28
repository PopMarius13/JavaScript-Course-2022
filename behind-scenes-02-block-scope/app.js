// let name = 'Max';

// if (name === 'Max') {
//   let hobbies = ['Sports', 'Cooking'];
//   console.log(hobbies);

// }

// function greet() {
//   let age = 30;
//   let name = 'Manuel';
//   console.log(name, age, hobbies);
// }

// console.log(name, hobbies);

// greet();


function getName() {
  return prompt('Your name:', '')
}

function greet() {
  const userName = getName()
  console.log('Hello ' + userName)
}

greet()


let person = {age: 30}

let samePerson = person /// copy reference to person

let anotherPerson = { ...person } /// copy date from person

let hobbies = ['Sports', 'Cooking']

let moreHobbies = [ ... hobbies]

moreHobbies.push('soccer')


const person1 = {age: 30}

const person2 = {age: 300}

person1 === person2 /// false, different objects, same with ==



const hobbies1 = ['sports'] /// const -> don't can change the reference

hobbies1.push('Cooking') /// we can push or pull elements











