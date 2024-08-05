const headerContainer = document.getElementById('header-container');
// headerContainer.style.display = 'none';

headerContainer.textContent = 'Text content';
headerContainer.innerText = 'inner text';
headerContainer.innerHTML = '<span>Inner Html</span>';

const items = document.getElementsByClassName('list-group-item');
console.log(items);

items[0].style.color = 'blue';
items[3].textContent = "high";

let lists = document.getElementsByTagName('li');

lists = Array.from(lists);

console.log(lists);