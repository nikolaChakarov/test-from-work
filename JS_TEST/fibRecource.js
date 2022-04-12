function fib(n) {
	if (n === 0) return 0;
	if (n === 1 || n === 2) return 1;

	let num = fib(n - 1) + fib(n - 2);
	return num;
}

console.log("Fibonacci series: ");
const arr = [];
for (let i = 0; i < 10; i++) {
	let res = fib(i);

	arr.push(res);
}

console.log(arr.join(", "));
