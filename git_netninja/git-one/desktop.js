export function onDesktop(options) {
	const selectEl = document.getElementsByClassName("select")[0];

	let currentSelect = options[0];
	selectEl.innerHTML = `<div class='option' data-name='${currentSelect.val}'>${currentSelect.val}</div>`;

	/* mouse enter */
	selectEl.addEventListener("mouseenter", addOption);

	function addOption(e) {
		selectEl.innerHTML = "";

		options.forEach(({ val }) => {
			const option = document.createElement("option");
			option.innerText = val;
			option.setAttribute("data-name", val);
			option.className = "option";

			option.addEventListener("click", onOptionClick);

			selectEl.appendChild(option);
		});
	}

	function onOptionClick(e) {
		e.stopPropagation();

		const currentValue = e.target.dataset.name;
		selectEl.innerHTML = `<div class='option' data-name='${currentValue}'>${currentValue}</div>`;

		currentSelect = options.find((el) => el.val === currentValue);

		options = options.filter((el) => el.val !== currentValue);
		options.sort((a, b) => a.order - b.order).unshift(currentSelect);

		console.log(currentSelect.val);
	}

	/* mouse leave */
	selectEl.addEventListener("mouseleave", () => {
		selectEl.innerHTML = `<div class='option' data-name='${currentSelect.val}'>${currentSelect.val}</div>`;
	});
}
