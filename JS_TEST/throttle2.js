const initApp = () => {
	const tbutton = document.querySelector("#throttle");

	tbutton.addEventListener("click", throttle(clickLog, 2000));
};

const clickLog = () => console.log("click...");

const throttle = (fn, delay) => {
	let lastTime = 0;
	console.log("called Throttle immediately");

	return (...args) => {
		const now = new Date().getTime();

		if (now - lastTime < delay) {
			return;
		}

		lastTime = now;
		fn(...args);
	};
};

document.addEventListener("DOMContentLoaded", initApp);
