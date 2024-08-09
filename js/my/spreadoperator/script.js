// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];
// const arr3 = [7, 8, 9];
// const arrWrap = [...arr1, ...arr2, ...arr3];
//
//
//
// console.log(arrWrap);

// const arr1 = [1, 2, 3];
// const arr2 = [4, 5];
// Array.prototype.push.apply(arr1, arr2);

// console.log(arr1);

// const arr1 = [1, 2, 3];
// const arr2 = [4, 5];
// arr1.push(...arr2);
//
// console.log(arr2);

// const obj1 = {
//     a: 'A',
//     b: 'B'
// };
// const obj2 = {
//     c: 'C',
//     d: 'D'
// };
// const objWrap = {obj1, obj2};
// console.log(objWrap);

// const obj1 = {
//     a: 'A',
//     b: 'B'
// };
// const obj2 = {
//     c: 'C',
//     d: 'D'
// };
// const objWrap = {...obj1, ...obj2};
// console.log(objWrap);
//
// const arr1 = [1, 2, 3];
// const arr2 = arr1.reverse();
//
// console.log(arr1);
// console.log(arr2);

const arr1 = [1, 2, 3];
const arr2 = [...arr1].reverse();

console.log(arr1);
console.log(arr2);