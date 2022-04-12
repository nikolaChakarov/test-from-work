function math(x) {
	let coutn = x;

	return function () {
		coutn += 1;
		return coutn;
	};
}

const count = math(5);

console.log(count());
console.log(count());
console.log(count());
console.log(count());
