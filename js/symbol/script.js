// const sym1 = Symbol();
// // // // const sym2 = Symbol();
// // // // const sym3 = Symbol('hi');


// // // // console.log(sym1 == sym2);

// // // // console.log(sym3.description);

// // // let carA = {
// // //     id: 1,
// // //     name: 'BMW',
// // //     brand: 'kia',
// // //     price: 1000
// // // }

// // // const idSym = Symbol('id');
// // // carA[idSym] = 300;
// // // // carA.id = 300;

// // // console.log(Object.getOwnPropertyNames(carA));

// // // for(const key in carA) {
// // //     console.log(key);
// // // }

// // // console.log(Object.getOwnPropertySymbols(carA));

// // // console.log(carA.id);

// // const sym1 = Symbol.for('sym1');
// // const sym2 = Symbol.for('sym1222');

// // console.log(sym1 === sym2);

// // console.log(Symbol.keyFor(sym1));
// // console.log(Symbol.keyFor(sym2));

// const Red = Symbol('red');
// const Yellow = 'yellow';
// const Orange = 'orange';
// const Blue = Symbol('blue');
// const dog = 'blue';

// function getImportantLevel(color) {
//     switch(color) {
//         case Red:
//             return 'very important';
//         case Orange:
//             return 'important';
//         case Yellow:
//             return 'little important';
//         case Blue:
//             return 'not important';
//         default:
//             console.log('${color} not included');
//     }
// }

// console.log(getImportantLevel(Blue));
// console.log(getImportantLevel(dog));
const length = Symbol('length');
class Car {
    constructor() {
        this[length] = 0;
    }

    add(brand, name) {
        this[brand] = name;
        this[length]++;
    }
}

let myCars = new Car();
myCars.add('BMW', 'kia');
myCars.add('Audi', 'a4');
myCars.add('Mercedes', 'EQS');

for (const car in myCars) {
    console.log(car, myCars[car]);
}