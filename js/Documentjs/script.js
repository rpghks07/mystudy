// let val;


// val = document;

// val = document.baseURI //웹 페이지의 절대 URI 반환

// val = document.head;

// val = document.body;

// val = document.forms;

// val = document.forms[0].id;

// val = document.forms[0].className;

// val = document.scripts; //script tag return

// val = document.scripts[1].getAttribute('src');

const headerContainer = document.getElementById('header-container');

// headerContainer.style.display = 'none';


// console.log(headerContainer);

headerContainer.textContent = 'Text Content';
headerContainer.innerText = "Inner Text";
headerContainer.innerHTML = "<span>Inner HTML</span>"


const items = document.getElementsByClassName("list-group-item");

items[0].style.color = 'blue';
items[3].textContent = "high";

let lists = document.getElementsByTagName('li');
console.log("lists");

// lists.array.forEach(list => {
//     console.log(list);
// });

lists = Array.from(lists);
console.log(lists);

lists.array.forEach(lists => {
    console.log(lists);
});
