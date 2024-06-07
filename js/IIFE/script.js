// (function () {
//     var aName = 'Barrry';
//     console.log(aName);
// }());

// console.log(aName);

// var result =(function () {
//     var name = "barrry";
//     return name;
// })();

// console.log(result);

const score = () => {
    let count = 0;
    return {
        current: () => {return count},
        increment: () => { count++ },
        reset: () => { count = 0 }
    }
}

console.log(typeof score);
console.log(score);
console.log(score().current());
score().increment();
console.log(score().current());