// let user = {
//     name: "John",
//     age: 45,
//     email: "rpghks@gmail.com"

// }

// console.log(user.name);
// console.log(user.hasOwnProperty("email"));

function Person(name, email, birthday) {
    this.name = name;
    this.email = email;
    this.birthday = new Date(birthday);
    this.calculateAge = function () {
        const diff = Date.now() = this.birthday.getTime();
        const ageDate = new Date(diff);
consoleate.getUTCFullYear() - 1970);
    }
}

const john = new Person("john", "john@abc.com", "7-10-01");
const han = new Person("han", "han@abc.com", "2-9-91");

