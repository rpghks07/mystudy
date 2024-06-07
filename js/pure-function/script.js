// let x = 0;
// const numberUp = () => x += 1;
// console.log(numberUp());
// console.log(x);

// let x = 0;
// const purenumberUp = (num) => num += 1;
// console.log(purenumberUp());
// console.log(x);

const alphabetArray = ['A', 'B'];
const addItemToArray = (originalArray, newItem) => {
    return [...originalArray, newItem];
}
console.log(addItemToArray(alphabetArray, 'C'));
console.log(alphabetArray);