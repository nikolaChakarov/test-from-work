const func = (inputNum, currency) => {
	let arr = inputNum.toString().split("");

	let index = arr.findIndex((el) => el == ".");

	let num = arr.slice(0, index);
	let rem = arr.slice(index + 1);

	if (num.lenght <= 3) {
		return `${currency} ${num.join("")}.${rem.join("")}`;
	}

	let temp = [];
	let count = 0;

	for (let i = num.length - 1; i >= 0; i--) {
		temp.push(num[i]);

		count++;

		if (count == 3) {
			temp.push(" ");
			count = 0;
		}
	}

	let forResult = temp.reverse();
	forResult[0] == "'" || forResult[0] == " " ? forResult.shift() : forResult;

	return `${currency} ${forResult.join("")}.${rem.join("")}`;
};

console.log(func(100.23, "$"));
console.log(func(1000.23, "$"));
console.log(func(10000.23, "$"));
console.log(func(100000.23, "$"));
console.log(func(1000000.23, "$"));
