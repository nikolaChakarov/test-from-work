//2. Arguments binding
//Arrow functions do not have an arguments binding. However, they have access to the arguments object of the closest non-arrow parent function. Named and rest parameters are heavily relied upon to capture the arguments passed to arrow functions.

let myFunc = {
	showArgs() {
		console.log(arguments);
	},
};
myFunc.showArgs(1, 2, 3, 4);

// In case of arrow function:

let myArrow = {
	showArgs: () => {
		console.log(...arguments);
	},
};
// myArrow.showArgs(1, 2, 3, 4); no arguments binding

//3. Use of this keyword
// Unlike regular functions, arrow functions do not have their own this. The value of this inside an arrow function remains the same throughout the lifecycle of the function and is always bound to the value of this in the closest non-arrow parent function.

let me = {
	name: "nikola chakarov",
	thisIsArrow: () => {
		console.log(`My name is ${this.name} // arrow`);
	},

	thisIsRegular() {
		console.log(`My name is ${this.name} // regular function`);
	},
};
me.thisIsArrow();
me.thisIsRegular();
