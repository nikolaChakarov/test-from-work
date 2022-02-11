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

// console.log(func(100.23, "$"));
// console.log(func(1000.23, "$"));
// console.log(func(10000.23, "$"));
// console.log(func(100000.23, "$"));
// console.log(func(1000000.23, "$"));

const data = [
	{
		id: 1,
		abonnementVip: 300,
		autres: 100,
		diagnostic: 400,
		financement: 500,
		mandats: 200,
		options: 200,
		year: 2022,
	},
	{
		id: 2,
		// abonnementVip: 300,
		autres: 100,
		diagnostic: 400,
		financement: 500,
		mandats: 200,
		options: 3,
		year: 2025,
	},
	{
		id: 3,
		abonnementVip: 400,
		// autres: 100,
		diagnostic: 400,
		financement: 500,
		mandats: 200,
		options: 5,
		year: 2021,
	},
	{
		id: 4,
		abonnementVip: 500,
		autres: 100,
		diagnostic: 400,
		financement: 500,
		mandats: 200,
		options: 1,
		year: 2021,
	},
];

const addTotal = (arr = []) => {
	const res = arr.map((el) => {
		const objKeys = Object.entries(el).filter(
			(el) => el[0] !== "id" && el[0] !== "year"
		);

		const total = objKeys.reduce((acc, [_, v]) => {
			acc += v;
			return acc;
		}, 0);
		return { ...el, total };
	});

	return res;
};

const arrObjects = addTotal(data);

const formatMatrix = (arr = [], matrixLength) => {
	let initial = arr.slice(0, matrixLength);
	const temp = initial.reduce((acc, curr) => {
		const keys = [
			"abonnementVip",
			"autres",
			"diagnostic",
			"financement",
			"mandats",
			"options",
			"year",
			"total",
		];
		keys.forEach((el) => {
			if (!acc[el]) {
				acc[el] = [];
			}

			curr[el] ? acc[el].push(curr[el]) : acc[el].push(0);
		});

		return acc;
	}, {});

	console.log(temp);
};

formatMatrix(arrObjects, 2);
