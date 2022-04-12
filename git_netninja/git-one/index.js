import { onDesktop } from "./desktop.js";
import { onMobile } from "./mobile.js";

window.onload = function (e) {
	let options = [
		{ val: "One", order: 1 },
		{ val: "Two", order: 2 },
		{ val: "Three", order: 3 },
	];

	this.innerWidth > 576 ? onDesktop(options) : onMobile(options);
};
