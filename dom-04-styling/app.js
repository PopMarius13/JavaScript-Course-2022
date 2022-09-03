const ul = document.body.firstElementChild.nextElementSibling;
const firstLi = ul.firstElementChild;

console.log(firstLi);

const section = document.querySelector('section');
const button = document.querySelector('button');

// section.style.backgroundColor = 'blue';
section.className = 'red-bg';

// section.innerHTML = '<h2> New Title </h2>'
// section.innerHTML = section.innerHTML + '<h2> New Title </h2>'
section.insertAdjacentHTML('beforeend', '<p> Something went wrong </p>')
const list = document.querySelector('ul')

const newElement  = document.createElement('li')
list.appendChild(newElement)
newElement.textContent = 'Item 4'
newElement.style.backgroundColor = 'blue'

list.append('Some text')

// Add new element
const newLi = document.createElement('li')
newLi.textContent = 'Item 5'
// list.prepend(newLi) //first element

// list.lastElementChild.before(newLi)
// list.lastElementChild.after(newLi)
// list.lastElementChild.replaceWith(newLi)
list.firstElementChild.insertAdjacentElement("afterend", newLi)

// Clone a element
//newLi.cloneNode(true) // deep
//newLi.cloneNode(false)

// Remove a element
// list.remove()
list.parentElement.removeChild(list)


button.addEventListener('click', () => {
  // if (section.className === 'red-bg visible') {
  //   section.className = 'red-bg invisible';
  // } else {
  //   section.className = 'red-bg visible';
  // }

  // section.classList.toggle('visible');
  section.classList.toggle('invisible');
});
