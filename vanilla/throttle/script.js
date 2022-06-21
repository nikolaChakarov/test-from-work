window.onload = () => {
	initApp();
};

// let test = (...args) => {
// 	console.log(args);
// 	console.log(args[0].target);
// };

const initApp = () => {
	const tbuttom = document.getElementById("throttle");

	tbuttom.addEventListener("click", throttle(clickLog, 2000));
	// tbuttom.addEventListener("click", (e) => test(e, "x", 1));
	// tbuttom.addEventListener("click", clickLog);
	// tbuttom.addEventListener("click", (e) => clickLog(e));

	window.addEventListener("scroll", throttle(scrollLog, 2000));

	const inputEl = document.getElementById("search");
	inputEl.addEventListener("keyup", debounce(logSearchInputValue, 1000));
};

const clickLog = (e) => {
	console.log(e);
	// console.log("click");
};
const scrollLog = (e) => {
	console.log(e);
	console.log("scroll");
};

const throttle = (fn, delay) => {
	let lastTime = 0;
	console.log("called throttle immediately");
	let id = 0;

	return (...args) => {
		const now = new Date().getTime();
		id++;

		if (now - lastTime < delay) return;

		lastTime = now;
		console.log(id);

		fn(...args);
	};
};

const logSearchInputValue = (e) => {
	console.log(e.target.value);
};

const debounce = (fn, delay) => {
	let timer;

	return (...args) => {
		clearTimeout(timer);
		timer = setTimeout(() => {
			fn(...args);
		}, delay);
	};
};
