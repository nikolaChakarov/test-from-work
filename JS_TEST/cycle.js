let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

arr.forEach((el) => {
	if (el % 2 === 0) {
		return;
	}
	console.log(el);
});
