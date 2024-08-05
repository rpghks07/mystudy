const listParent = document.querySelector('ul');
const list = document.querySelectorAll('li');

listParent.removeChild(list[1]);

console.log(listParent);
console.log(list);

const oldElement = document.getElementById('A');
const newElement = document.createElement('span');
newElement.textContent = 'Hi';
oldElement.parentNode.replaceChild(newElement, oldElement);