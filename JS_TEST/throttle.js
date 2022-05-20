function throttle(callback, delay) {
	let isWaiting = false;

	let self = null;
	let selfArgs = null;

	return function wrapper(...args) {
		if (isWaiting) {
			self = this;
			selfArgs = args;
			return;
		}

		callback.apply(this, args);
		isWaiting = true;

		setTimeout(() => {
			isWaiting = false;

			if (self) {
				wrapper.apply(self, selfArgs);
				self = null;
				selfArgs = null;
			}
		}, delay);
	};
}

const f = throttle(console.log, 1000);

f(1);
f(2);
setTimeout(() => f(3), 100);
setTimeout(() => f(4), 500);
setTimeout(() => f(5), 900);
