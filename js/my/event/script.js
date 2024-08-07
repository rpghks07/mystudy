// window.onload = function () {
//
//     let text = document.getElementById("text");
//
//     text.innerHTML = "HTML 문서 loaded";
// };
//
// const aElement = document.querySelector('a');
// aElement.addEventListener('click', () => {
//     alert('a element clicked');
// })
//
// console.log(text);

// const buttonElement = document.querySelector('.btn2');
//
// buttonElement.addEventListener('click', (event) => {
//     let val;
//     val = event.target;
//     val = event.target.id;
//     val = event.target.className;
//     val = event.target.classList;
//    
//     val = event.type;
//     val = event.clientY;
//    
//     val = event.offsetY;
//    
//     console.log(val);
// })

// const submitBtn = document.querySelector('.submit-btn');
// const form = document.querySelector('form');
// const title = document.querySelector('h2');
//
// //Event
// submitBtn.addEventListener('click', handleEvent);
// submitBtn.addEventListener('dblclick', handleEvent);
// submitBtn.addEventListener('mousedown', handleEvent);
// submitBtn.addEventListener('mouseup', handleEvent);
// submitBtn.addEventListener('mouseenter', handleEvent);
// submitBtn.addEventListener('mouseleave', handleEvent);
// submitBtn.addEventListener('mousemove', handleEvent);

const form = document.querySelector('form');
const emailInput = document.getElementById('email');
const title = document.querySelector('h2');
//Form Event
form.addEventListener('submit', handleEvent);
emailInput.addEventListener('keydown', handleEvent);
emailInput.addEventListener('keyup', handleEvent);
emailInput.addEventListener('keypress', handleEvent);
emailInput.addEventListener('focus', handleEvent);
emailInput.addEventListener('blur', handleEvent);
emailInput.addEventListener('cut', handleEvent);



function handleEvent(e) {
    if (e.type == 'submit') {
        e.preventDefault();
    }

    console.log(`Event Type: ${e.type}`);
    // title.textContent = `MouseX: ${e.offsetX} MouseY: ${e.offsetY}`;
    title.textContent = e.target.value;
}
