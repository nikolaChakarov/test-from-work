const counter = (function () {
	let count = 0;
	return function up() {
		return (count += 1);
	};
})();

console.log(counter());
console.log(counter());
console.log(counter());
