const str = "aaaaaaaa43434 3333 3 343faasf afaf34234";

const func = (data) => {
	const regex = new RegExp(/[0-9]+/g);

	let res = "";

	res = data.replace(regex, (el, i) => {
		return "*".repeat(el.length);
	});

	console.log(res);
};

func(str);
