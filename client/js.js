function Person(name, age) {
	this.name = name;
	this.age = age;
}

Person.prototype.getInfo = function () {
	return `My name is ${this.name} and I am ${this.age} old.`;
};

const p = new Person("kika", 40);

console.log(p.getInfo());

function Teacher(name, age, profession) {
	Person.call(this, name, age);

	this.profession = profession;
}

Teacher.prototype = Object.create(Person.prototype);

Teacher.prototype.getInfo = function () {
	return (
		Person.prototype.getInfo.call(this) +
		` And I am ${this.profession} teacher.`
	);
};

const t = new Teacher("sisa", 35, "matemathic");

console.log(t.getInfo());

let obj1 = {
	name: "kika",
	age: 38,
	getInfo: function () {
		return `My name is ${this.name} and I am ${this.age} old.`;
	},
};

let obj2 = {
	name: "desa",
	age: 42,
};

console.log(obj1.getInfo());
console.log(obj1.getInfo.call(obj2));

let binded = obj1.getInfo.bind(obj2);
console.log(binded());

class Animal {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}

	get name() {
		return this._name;
	}

	set name(input) {
		this._name = input;
	}

	get age() {
		return this._age;
	}

	set age(input) {
		this._age = input;
	}

	static internal() {
		return this.name;
	}

	print() {
		return `My name is ${this.name}, and I am ${this.age} old.`;
	}
}

class Dog extends Animal {
	constructor(name, age, race) {
		super(name, age);
		this.race = race;
	}

	print() {
		return super.print() + ` I am a ${this.race}`;
	}
}

let a = new Animal("rex", 3);
console.log(Animal.internal());
console.log(a.print());
a.age = 5;
console.log(a.print());

let d = new Dog("cezar", 1, "dog");
console.log(d.print());
