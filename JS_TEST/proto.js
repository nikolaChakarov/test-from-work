function Person(name, age) {
	this.name = name;
	this.age = age;
}

Person.prototype.getData = function () {
	return `My name is ${this.name}, and I am ${this.age} years old.`;
};

let p1 = new Person("Nikk", 50);

console.log(p1.getData());

function Teacher(name, age, profession) {
	Person.call(this, name, age);
	this.profession = profession;
}

Teacher.prototype = Object.create(Person.prototype);

Teacher.prototype.getName = function () {
	return `My name is ${this.name}`;
};

let t1 = new Teacher("Sisa", 30, "mathematics");
console.log(t1.getName());
console.log(t1.getData());

Teacher.prototype.getData = function () {
	return `My name is ${this.name}, and I am ${this.age} years old. I am a ${this.profession} teacher`;
};

console.log(t1.getName());
console.log(t1.getData());

let obj1 = {
	name: "desa",
	age: 40,
	getData: function () {
		return `My name is ${this.name}, and I am ${this.age} years old.`;
	},
};

console.log(obj1.getData());

let obj2 = {
	name: "sisa",
	age: 45,
};

console.log(obj1.getData.call(obj2));

let obj3 = {
	name: "xxxxx",
	age: 1000,
};
/* bind */
let binded = obj1.getData.bind(obj3);
console.log(binded());
