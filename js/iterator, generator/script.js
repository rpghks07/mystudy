// function makeIterator(numbers) {
//     let nextIndex = 0;

//     return {
//         next: function () {
//             return nextIndex < numbers.length ?
//                 { value: numbers[nextIndex++], done: false } :
//                 { value: undefined, done: true }
//         }
//     }
// }

// //숫자 배열 생성
// const numbersArr = [1, 2, 3];
// //이터레이터에 숫자 배열 넣어주기
// // const numbersIterator = makeIterator(numbersArr);
// const numbersIterator = numbersArr[Symbol.iterator]();

// console.log(numbersIterator.next());
// console.log(numbersIterator.next());
// console.log(numbersIterator.next());
// console.log(numbersIterator.next());

// const numbersIterable = [1, 2, 3];
// const numbersNotIterable = { a:1, b:2 };
// console.log(typeof numbersIterable);
// console.log(typeof numbersNotIterable);
// for (const n of numbersNotIterable) {
//     console.log(n);
// }

// const arr = [1, 2, 3, 4];
// const set = new Set([1, 2, 3, 4]);
// console.log('set', set);
// const map = new Map([
//     ['a', 1],
//     ['b', 2],
// ]);
// console.log('map', map);
// const obj = { a: 1, b: 2 };

// console.log(arr[Symbol.iterator]());
// console.log(set[Symbol.iterator]());
// console.log(map[Symbol.iterator]());
// console.log(obj[Symbol.iterator]());

//Generator Function
// function* sayNumbers() {
//     yield 1;
//     yield 2;
//     yield 3;
// }

// const number = sayNumbers();

// console.log(number.next());
// console.log(number.next());
// console.log(number.next());
// console.log(number.next());

// id creator
// function* creatIds() {
//     let index = 1;

//     while (true) {
//         yield index++;
//     }
// }

// const gen = creatIds();

// console.log(gen.next().value);
// console.log(gen.next().value);
// console.log(gen.next().value);
// console.log(gen.next().value);
// console.log(gen.next().value);

function* generatorFunction() {
    yield* [1, 2, 3];
}

const generator = generatorFunction();

for (const number of generator) {
    console.log(number);
}