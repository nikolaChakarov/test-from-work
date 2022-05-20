// Basic Types
let id: number = 5;
let company: string = 'some company name';
let isPublished: boolean = true;
let x: any = 'Hello';

let ids: number[] = [1, 2, 3];
let arr: any = [1, true, 'Hello'];

// Tuple
let person: [number, string, boolean] = [1, 'name', true]
// Tuple Array
let emploee: [number, string][]

emploee = [
    [1, 'first'],
    [2, 'second'],
    [3, 'third'],
]

// Union
let pid: string | number;
pid = '3';

// Enum
enum Direction1 {
    Up, Down, Left, Right
}

enum Direction2 {
    Up = 'Up',
    Down = 'Down',
    Left = 'Left', 
    Right = 'Right'
}

// console.log(Direction2.Left);

// Objects 
type User = {
    id: number,
    name: string
}

const user: User = {
    id: 1,
    name: 'John'
}

// Type Assertion
let cid: any = 1;
// let customerId = <number>cid;
let customerId = cid as number;

// Functions
function addNum(x: number, y: number): number {
    return x + y;
}

function log(message: string | number): void {
    console.log(message);  
}

console.log('test from log function');


// Interfaces
interface UserInterface {
    id: number
    name: string
    age?: number // optional
    readonly status: string
}

const user1: UserInterface = {
    id: 1,
    name: 'John',
    status: 'waiting...'
}

interface MathFunc {
    (x: number, y: number): number
}

const add: MathFunc = (x: number, y: number): number => {
    return x + y
}

const sub: MathFunc = (x: number, y: number): number => {
    return x + y
}

// Class Interface
interface PersonInterface {
    id: number
    name: string
    register(): string
}


// Classes
class Person implements PersonInterface {
    id: number
    name: string
    private age: number

    constructor(id: number, name: string, age: number) {
        this.id = id;
        this.name = name;
        this.age = age
    }

    register() {
        return `${this.name} is now registered`;
    }
}

const p = new Person(1, 'User 1', 45);

// Subclass
class Employee extends Person {
    position: string

    constructor(id: number, name: string, age: number, position: string) {
        super(id, name, age);
        this.position = position;
    }

}

const emp = new Employee(3, 'Tom', 50, 'developer');
console.log(emp.register());

// Generics - use to build reusable components
function getArray<T>(items: T[]): T[] {
    return new Array().concat(items);
}

let numArr = getArray<number>([1, 2, 3, 4]);
let strArr = getArray<string>(['brad', 'john', 'jill']);

