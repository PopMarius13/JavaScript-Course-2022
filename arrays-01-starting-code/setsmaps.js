// const ids = new Set()
const ids = new Set([1, 2, 3, 4])
ids.add(2)
console.log(ids.has(2))
console.log(ids)

if (ids.has(2)) {
    ids.delete(2)
}

for (const entry of ids.entries()) {
    console.log(entry)
}

let person1 = {name: 'Max'}
const person2 = {name: 'Manuel'}

const personData1 = new Map([[person1, [{date: 'yesterday', price: 10}]]])
personData1.set(person2, [{date: 'two week ago', price: 100}])

console.log(personData1)
console.log(personData1.get(person1))

for (const [key, value] of personData1.entries()) {
    console.log(key, value)
}

for (const key of personData1.keys()) {
    console.log(key)
}

for (const values of personData1.values()) {
    console.log(values)
}

const persons1 = new WeakSet()
persons1.add(person1)
person = null
console.log(persons1)

const personData3 = new WeakMap()

personData3.set(person1, 'Extra info')

person1 = null

console.log(personData3)