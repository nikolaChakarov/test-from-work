window.onload = async function () {
	const db = await (
		await fetch("https://jsonplaceholder.typicode.com/users")
	).json();

	console.log(db);

	let input = document.querySelector("#search-el");
	const ulEl = document.querySelector(".list");

	console.log(ulEl);

	const onChangeDebounced = debounce(onChange, 500);

	input.addEventListener("keyup", onChangeDebounced);

	function onChange(e) {
		console.log(e.target.value);

		let res = db.filter((el) =>
			el.name.toLowerCase().includes(e.target.value.toLowerCase())
		);

		ulEl.innerHTML = "";
		res.forEach((el) => {
			const li = document.createElement("li");
			li.innerText = el.name;
			ulEl.appendChild(li);
		});
	}

	function debounce(fn, delay) {
		let timer;

		return function () {
			const cb = () => {
				fn.apply(this, arguments);
			};

			clearTimeout(timer);

			timer = setTimeout(cb, delay);
		};
	}
};
