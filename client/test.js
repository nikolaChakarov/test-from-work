const formatPrice = (price) => {
	let res = price
		.split("")
		.reverse()
		.reduce((acc, curr, idx) => {
			if (idx % 3 === 0 && idx > 1) {
				acc += "'";
				acc += curr;
				return acc;
			}

			acc += curr;
			return acc;
		}, "");

	res = res.split("").reverse().join("");
	console.log(res);
};

formatPrice("1");
formatPrice("10");
formatPrice("100");
formatPrice("1000");
formatPrice("10000");
formatPrice("100000");
formatPrice("1000000");
formatPrice("10000000");

const getFileName = (input) => {
	const index = input.lastIndexOf("/");

	return input.slice(index + 1);
};

console.log(
	getFileName(
		"users/admin@admin.com-86bd2093-a661-451e-a8df-23be6f43d28b/masterclass-book-cancer.png"
	)
);
