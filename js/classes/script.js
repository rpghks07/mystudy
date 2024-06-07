class Person {
    constructor(name, email, birthday) {
        this.name = name;
        this.email = email;
        this.birthday = new Date(birthday);
    }
        
        introduce() {
            return 'hello my name is ${this.name}';
        }
}

const john = new Person("john", "john@abc.com", "7-10-12");