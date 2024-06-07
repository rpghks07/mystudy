// Call();
// const fullName = function(city, contry) {
//     console.log(this.firstName + ' ' + this.lastName, city, contry);
// }

// const person1 = {
//     firstName: 'john',
//     lastName: 'Smith'
// }

// fullName.call(person1, "Oslo", "Norway");

//Apply();

// const fullName = function(city, contry) {
//     console.log(this.firstName + ' ' + this.lastName, city, contry);
// }

// const person1 = {
//     firstName: 'john',
//     lastName: 'Smith'
// }

// fullName.apply(person1, ["Oslo", "Norway"]);

//Bind();
function func(language) {
    if(language === "kor") {
        console.log('language: ${this.korGreeting}');
    } else {
        console.log('language: ${this.engGreeting}');
    }
}

const greeting = {
    korGreeting: '안녕 ',
    engGreeting: 'Hello ',
}

const boundFunc = func.bind(greeting);
boundFunc('kor');