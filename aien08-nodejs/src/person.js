class Person {
    constructor(name = 'noname', age = 20) {
        this.name = name;
        this.age = age;
    }

    toJSON() {
        return JSON.stringify({
            name: this.name,
            age: this.age
        })
    }
}
let a = 10;
console.log('a:', a);

module.exports = Person;


