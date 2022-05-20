import { Clock } from "./class_basic.js";

class ExtendedClock extends Clock {
	constructor(...args) {
		super(...args);
		this.counter = 1000;
	}

	precision() {
		this.intervalId = setInterval(() => {
			console.log(this.counter);
			this.counter += this.timer._repeat;
		}, 1000);
	}

	stop() {
		super.stop();
		clearInterval(this.intervalId);
	}
}

const clock = new ExtendedClock({ template: "h:m:s" });

clock.start();

// setTimeout(() => {
// 	clock.stop();
// }, 2000);

clock.precision();
setTimeout(() => {
	clock.stop();
}, 4000);
