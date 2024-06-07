//  

// const sumitBtn = document.querySelector('.sumit-btn');
// const form = document.querySelector('.form');
// const title = document.querySelector('.h2');

// //EVENT
// sumitBtn.addEventListener('click', handleEvent);
// sumitBtn.addEventListener('dblclick', handleEvent);

//FORM EVENT
const form = document.querySelector('.form');
const emailInput = document.getElementById('emailt');
const title = document.querySelector('.h2');

form.addEventListener('submit', handleSubmit);




function handleEvent(e) {
    e.preventDefault();
    console.log('Event Type: ${e.type}');
    title.textContent = 'MouseX: ${e.offsetX} MouseY: ${e.offsetY} ';
}
