// alert() -> window.alert()

// console.dir(document) -> window.document

const h1 = document.getElementById('main-title')
h1.textContent = 'New Title'
h1.style.color = 'white'
h1.style.backgroundColor = 'black'

const li = document.querySelector('li')
li.textContent += ' Changed'


const listItemElements = document.querySelectorAll('li')


for (const listItemElement of listItemElements) {
  console.dir(listItemElement)
}
 