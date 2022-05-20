function wrapper(fn, delay) {
	let timer;

	return function (...args) {
		clearTimeout(timer);

		timer = setTimeout(() => {
			fn.apply(this, args);
		}, delay);
	};
}

const f = wrapper(console.log, 1000);

f(3);
  