const obj1 = {
	name: "object 1",
	print: function () {
		console.log(`My name is ${this.name}`);
	},
};

obj1.print();

const obj2 = {
	name: "boject 2",
	age: 45,
};

const binded = obj1.print.bind(obj2);
binded(); // My name is object 2;

const friend1 = { firstName: "friend one", lastName: "l name f one." };
const friend2 = { firstName: "friend two", lastName: "l name f two" };

function invite(greeting1, greeting2) {
	console.log(`${greeting1} ${this.firstName} ${this.lastName} ${greeting2}`);
}

invite.call(friend1, "Hey", "What's up?");
invite.apply(friend2, ["Hey", "What's up?"]);

let inviteFriend1 = invite.bind(friend1);
inviteFriend1("Hello", "From Bind Function");
