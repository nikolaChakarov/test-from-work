class User {
	constructor(email, name) {
		this.email = email;
		this.name = name;
		this.score = 0;
	}

	login() {
		console.log(`${this.name} is logged in`);
		return this;
	}

	logout() {
		console.log(`${this.name} is logged out`);
		return this;
	}

	updateScore() {
		this.score++;
		console.log(`${this.email} score is now ${this.score}`);
	}
}

class Admin extends User {
	deleteUser(user) {
		users = users.filter((el) => el.email !== user.email);
	}
}

const userOne = new User("first@test.com", "user one");
const userTwo = new User("second@test.com", "user two");
const userThree = new User("third@test.com", "user three");
const admin = new Admin("admin@test.com", "admin");

let users = [userOne, userTwo, userThree];
console.log(users);

admin.deleteUser(userTwo);
console.log(users);

// function Person(name, age) {
// 	this.name = name;
// 	this.age = age;
// }

// Person.prototype.print = function () {
// 	console.log(`My name is ${this.name}, I am ${this.age} years old.`);
// };

// const p1 = new Person("first person", 30);
// p1.print();

// function Student(name, age, profetion) {
// 	Person.call(this, name, age);
// 	this.profetion = profetion;
// }

// Student.prototype = Object.create(Person.prototype);
// const s1 = new Student("student name", 18, "mathematic");
// Student.prototype.print = function () {
// 	console.log(
// 		`My name is ${this.name}, I am ${this.age} years old. I sudy ${this.profetion}`
// 	);
// };

// s1.print();
