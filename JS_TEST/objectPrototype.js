//Prototypes are the mechanism by which JavaScript objects inherit features from one another.

//Every object in JavaScript has a built-in property, which is called its prototype. The prototype is itself an object, so the prototype will have its own prototype, making what's called a prototype chain. The chain ends when we reach a prototype that has null for its own prototype.

const myObject = {
	city: "Madrid",
	greet() {
		console.log(`Greetings from ${this.city}`);
	},
};

myObject.greet(); // Greetings from Madrid

console.log(Object.getPrototypeOf(myObject));
