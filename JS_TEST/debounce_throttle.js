const input = document.querySelector("input");

const defaultText = document.getElementById("default");
const debounceText = document.getElementById("debounce");
const throttleText = document.getElementById("throttle");
const ulEl = document.querySelector("ul");

const updateDebounceText = debounce(onDeboucneInputChange, 1000);
const updateThrottleText = throttle(onThrottleInputChange, 2000);

input.addEventListener("input", (e) => {
	defaultText.textContent = e.target.value;

	updateDebounceText(e);
	updateThrottleText(e);
});

function debounce(cb, delay) {
	let timer;

	return (...args) => {
		clearTimeout(timer);

		timer = setTimeout(() => {
			cb(...args);
		}, delay);
	};
}

async function onDeboucneInputChange(e) {
	console.log(e.target.value, "...debounce");
	debounceText.textContent = e.target.value;

	ulEl.innerHTML = "";

	if (e.target.value === "") {
		return;
	}

	let db = await (
		await fetch("https://jsonplaceholder.typicode.com/users")
	).json();

	console.log(db);

	let filtered = [];

	filtered = db.filter((el) =>
		el.name.toLowerCase().includes(e.target.value.toLowerCase())
	);

	if (filtered.length === 0) {
		ulEl.innerHTML = "No Mathces found";
		return;
	}

	filtered.forEach((el) => {
		const li = document.createElement("li");
		li.innerText = el.name;
		ulEl.appendChild(li);
	});

	console.log(filtered);
}

function throttle(cb, delay) {
	let wait = false;
	let waitingArs;
	const timeotFunc = () => {
		if (waitingArs === null) {
			wait = false;
		} else {
			cb(...waitingArs);
			waitingArs = null;
			setTimeout(timeotFunc, delay);
		}
	};

	return (...args) => {
		if (wait) {
			waitingArs = args;
			return;
		}

		cb(...args);
		wait = true;

		setTimeout(timeotFunc, delay);
	};
}

function onThrottleInputChange(e) {
	throttleText.textContent = e.target.value;

	console.log(e.target.value, "...throttle");
}

document.addEventListener("mousemove", (e) => {
	incrementCount(defaultText);
});

function incrementCount(el) {
	el.textContent = (parseInt(el.innerText) || 0) + 1;
}
