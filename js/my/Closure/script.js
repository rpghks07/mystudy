function outerFunction(outerVariable) {
    return function innerFunction(innerVariable) {
        console.log('Outer Variable: ' + outerVariable);
        console.log('Inner Variable: ' + innerVariable);
    }
}

const newFunction = outerFunction('outside');
newFunction('inside');

let a = 'a';



function functionA() {
    let b = 'b';
    function functionB() {
        let c = 'c';
        console.log(a, b, c);
    }
    console.log(a, b);
    functionB();
}

functionA();

