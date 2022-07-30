function sayHello(name) {
  console.log('Hi ' + name)
}

const sayHello1 = (name) => {
  console.log('Hi ' + name)
}

const sayHello2 = (name, hello = 'Hi') => {
  console.log(hello + name)
}

const sayHello3 = () => {
  console.log('Hi Marius')
}

const sayHello4 = () => {
  return 'Hi Marius'
}

function checkInput(cb, ...strings) {
  let hasEmptyText = false;
  for (const text of strings) {
    if (!text) {
      hasEmptyText = true;
      break;
    }
  }
  if (!hasEmptyText) {
    cb();
  }
}

checkInput(
  () => {
    console.log('All not empty!');
  },
  'Hello',
  '12',
  'Not empty'
);


sayHello('Marius')
sayHello1('Marius')
sayHello2('Marius', 'Hi ')
sayHello3()
sayHello4('Marius')