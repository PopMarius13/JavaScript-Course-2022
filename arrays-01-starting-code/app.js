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

const removedElements = hobbies.splice(1, 1, 'Good Food') /// start, how many elements delete and how items to add
console.log(hobbies)
console.log(removedElements)

const testArray = [1, 4, 2.4, 2, 5, 2.4]
const copyArray = testArray.slice()
// const newArray = testArray.slice(2)
const newArray = testArray.slice(-3, -1) // 4, 2.4
const storeResults = testArray.concat([7, 2, 4])

console.log(testArray, copyArray, newArray,storeResults)
console.log(testArray.indexOf(2.4))
console.log(testArray.lastIndexOf(2.4))

const personData = [{name: 'Max'}, {name: 'Manuel'}]
console.log(personData.indexOf({name: 'Manuel'})) /// => -1
const manuel = personData.find((person, idx, persons) => {
    return person.name === 'Manuel'
})

manuel.name = 'Anna'

console.log(manuel, personData)

const maxIndex = personData.findIndex((person, idx, persons) => {
    return person.name === 'Max'
})

console.log(maxIndex)

console.log(testArray.includes(1.5))


const prices = [10.99, 5.99, 3.96, 6.49]
const tax = 0.19
const taxAdjustedPrices = []

// for (const price of prices) {
//     taxAdjustedPrices.push(price + tax)
// }

prices.forEach((price, index, prices) => {
    const priceObj = { index: index, taxAdjustedPrices: price * (1 + tax) }
    taxAdjustedPrices.push(priceObj)
})

const newTaxAdjustedPrices = prices.map((price, index, prices) => {
    return {index: index, taxAdjPrice: price * (1 + tax)}
})

console.log(taxAdjustedPrices)
console.log(newTaxAdjustedPrices)

prices.sort() /// like a string
console.log(prices)

prices.sort((a, b) => {
    if (a > b) {
        return 1
    }
    if (a < b){
        return -1
    }
    return 0;
})
console.log(prices)
console.log(prices.reverse())

const filteredArray1 = prices.filter((price, index, prices) => {
    return price > 6
})

const filteredArray2 = prices.filter(p => p > 6)

console.log(filteredArray1, filteredArray2)

// let sum = 0
// prices.forEach((price) => {
//     sum += price
// })
//
// const sum = prices.reduce((previousValue, currentValue, currentIndex, prices) => {
//     return previousValue + currentValue
// }, 0) /// first -> previousValue = 0 and currentValue = prices[0]

const sum = prices.reduce((previousValue, currentValue) => previousValue + currentValue, 0)

console.log(sum)

const data = 'new york;10.99;2000'
const transformedData = data.split(';')
console.log(transformedData)

const nameFragments = ['Max', 'Pop']
const names = nameFragments.join('; ')
console.log(names)

const elements = [...nameFragments]
nameFragments.push('Marius')
const elements1 = [...nameFragments]
const elements2 = [...nameFragments, 'Ionut', ...elements]
console.log(elements1, elements, elements2)

console.log(Math.min(...prices))

const persons = [{ name: 'Max', age: 30 }, { name: 'Manuel', age: 31}]
const copiedPointer = [ ...persons ]
const copiedPersons = [ ...persons.map(person => ( { name: person.name, age: person.age} ) ) ]

console.log(copiedPointer, copiedPersons)

const nameData = ['Max', 'Schwarz', 'Mr', 30]
// const firstName = nameData[0]
// const lastName = nameData[1]

const [ firstName, lastName, ...otherInformation ] = nameData

console.log(firstName, lastName, otherInformation)
















