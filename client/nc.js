// const data = ((currentEl) => {
// 	let filters = ["a", "b", "c"];

// 	let tempArr = filters.filter((el) => el !== currentEl);
// 	console.log(tempArr, ".........");
// 	tempArr.unshift(currentEl);
// 	console.log(tempArr, ".........");

// 	return tempArr;
// })("b");

// console.log(data);

const data = [
	"улица „Зорница“ 5, xxx, България",
	'bulevard "Hristo Botev" 152, Plovdiv, Bulgaria',
	'ul. "Trudovak" 4, Sofia, Bulgaria',
	"бул. „Пещерско шосе“ 134, Plovdiv, Bulgaria",
	"булевард „България“ 115, Пловдив, България",
	'ulitsa "Rayko Daskalov", Plovdiv, Bulgaria',
	"улица „Стефан Стамболов“ 34, Plovdiv, Bulgaria",
	"улица „Зорница“ 1, Пловдив, България",
];

const func = (arr) => {
	const regs = ["Plovdiv", "Пловдив", "Sofia"];

	const res = [];

	regs.forEach((r) => {
		arr.forEach((el) => {
			if (el.match(r)) {
				res.push(el);
			}
		});
	});

	return res;
};
