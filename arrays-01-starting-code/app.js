// const numbers = [1, 2, 3]
// console.log(numbers)
//
// const moreNumbers = new Array() // []
// console.log(moreNumbers)
//
// const array1 = new Array('Hi!', 'Welcome')
// console.log(array1)
//
// const array2 = new Array(5) /// 5 -> array length
// console.log(array2)
//
// const array3 = Array(5) /// 5 -> array length
// console.log(array3)
//
// const array4 = Array.of(1, 2)
// console.log(array4)
//
// const array5 = Array.of(1)
// console.log(array5)
//
// const array6 = Array.from([1, 2, 3])
// console.log(array6)
//
// const array7 = Array.from('Hi!')
// console.log(array7)
//
// const listItems = document.querySelector('li')
// const arrayItems = Array.from(listItems)
// console.log(arrayItems)
//
// const hobbies = ['Cooking', 'Sports']
//
// const personalData = [30, 'Max', {moreDetail: []}]
//
// const analyticsData = [[1, 1.6], [-5, 'Hei']]
//
// for (const data of analyticsData) {
//     for (const dataPoints of data) {
//         console.log(dataPoints)
//     }
// }
//

const hobbies = ['Sports', 'Cooking']
// add
hobbies.push('Reading')
hobbies.unshift('Coding')

//remove
const poppedValue = hobbies.pop()
const shiftedValue = hobbies.shift()

console.log(hobbies)
console.log(poppedValue)
console.log(shiftedValue)

hobbies[1] = 'Coding'
hobbies[5] = 'Reading'
console.log(hobbies)




