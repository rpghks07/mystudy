// const sum = (x,y) => x + y;

// const curriedSum = x => y => x + y;

// console.log(sum(10, 20));
// console.log(curriedSum(10));
// console.log(curriedSum(10)(20));

// const tenPlus = curriedSum(10);
// console.log(tenPlus);
// console.log(tenPlus(100));

function log(date, importance, message) {
    alert('[date.getHours()}:${date.getMinutes()}] [${importance}] ${message}');
}

log(new Date(), "DEBUG", "Some debug");