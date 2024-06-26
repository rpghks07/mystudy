// //shallow copy
// const aArray = [1, 2, 3];

// //shallow copy with spread operator
// const bArray = [...aArray, 4];

// console.log('aArray:', aArray);
// console.log('bArray:', bArray);
// console.log('aAraay === bArray:', aArray === bArray);

// //shallow copy with spread operator
// const cArray = Object.assign([], bArray);
// console.log('cArray:', cArray);
// console.log('bArray' === 'cArray', bArray === cArray);

// //Nested Arrays and Objects
// cArray.push([5,6,7]);
// console.log('cArray:', cArray);
// const dArray = [...cArray, 10];
// console.log('dArray:', dArray);
// dArray[4].push(8);
// console.log('cArray:', cArray);
// console.log('dArray:', dArray);


// //얕은 동결
const aObject = {
    "a": "a",
    "b": "b",
    "cObject": { "a": 1, "b": 2 }
}

// Object.freeze(aObject);
// aObject.a = "c";
// console.log('aObject:', aObject);

// aObject.cObject.a = 3;
// console.log('aObject:', aObject);

//deep copy with json.parse(json.stringfy());
// const newObject = JSON.parse(JSON.stringify(aObject));

console.log('aObject:', aObject);
console.log('newObject:', newObject);
aObject.cObject.a = 3;
console.log('aObject:', aObject);
console.log('newObject:', newObject);

//deep copy with nested speread operator
const newAObject = {...aObject,cObject: {...aObject.cObject} };

console.log('aObject:', aObject);
console.log('newObject:', newObject);
aObject.cObject.a = 3;
console.log('aObject:', aObject);
console.log('newObject:', newObject);