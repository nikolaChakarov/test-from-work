"use strict";
// Basic Types
let id = 5;
let company = 'some company name';
let isPublished = true;
let x = 'Hello';
let ids = [1, 2, 3];
let arr = [1, true, 'Hello'];
// Tuple
let person = [1, 'name', true];
// Tuple Array
let emploee;
emploee = [
    [1, 'first'],
    [2, 'second'],
    [3, 'third'],
];
// Union
let pid;
pid = '3';
// Enum
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 0] = "Up";
    Direction1[Direction1["Down"] = 1] = "Down";
    Direction1[Direction1["Left"] = 2] = "Left";
    Direction1[Direction1["Right"] = 3] = "Right";
})(Direction1 || (Direction1 = {}));
var Direction2;
(function (Direction2) {
    Direction2["Up"] = "Up";
    Direction2["Down"] = "Down";
    Direction2["Left"] = "Left";
    Direction2["Right"] = "Right";
})(Direction2 || (Direction2 = {}));
const user = {
    id: 1,
    name: 'John'
};
// Type Assertion
let cid = 1;
// let customerId = <number>cid;
let customerId = cid;
// Functions
function addNum(x, y) {
    return x + y;
}
function log(message) {
    console.log(message);
}
console.log('test from log function');
const user1 = {
    id: 1,
    name: 'John',
    status: 'waiting...'
};
const add = (x, y) => {
    return x + y;
};
const sub = (x, y) => {
    return x + y;
};
// Classes
class Person {
    constructor(id, name, age) {
        this.id = id;
        this.name = name;
        this.age = age;
    }
    register() {
        return `${this.name} is now registered`;
    }
}
const p = new Person(1, 'User 1', 45);
// Subclass
class Employee extends Person {
    constructor(id, name, age, position) {
        super(id, name, age);
        this.position = position;
    }
}
const emp = new Employee(3, 'Tom', 50, 'developer');
console.log(emp.register());
// Generics - use to build reusable components
function getArray(items) {
    return new Array().concat(items);
}
let numArr = getArray([1, 2, 3, 4]);
let strArr = getArray(['brad', 'john', 'jill']);
