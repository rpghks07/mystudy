const listParent = document.querySelector('ul');
const list = document.querySelectorAll('li');



//요소 지우기
// listParent.removeChild(list[1]);

//요소 교체하기
const oldElement = document.getElementById('A');
const NewElement = document.createElement('span');

NewElement.textContent = 'Hi';

oldElement.parentNode.replaceChild(NewElement, oldElement);