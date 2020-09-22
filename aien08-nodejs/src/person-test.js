const Person = require(__dirname + '/person');

const p1 = new Person;
const p2 = new Person('Bill', 28);

console.log(p1.toJSON());
console.log(p2.toJSON());

const Person2 = require('./person');

console.log(Person === Person2)