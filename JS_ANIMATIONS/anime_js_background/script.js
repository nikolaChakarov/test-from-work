window.onload = function () {
	const container = document.querySelector(".container");

	for (let i = 0; i < 101; i++) {
		container.appendChild(createEl("div", { class: "block" }));
	}

	function animateBlocks() {
		anime({
			targets: ".block",
			translateX: function () {
				return anime.random(-700, 700);
			},
			translateY: function () {
				return anime.random(-500, 500);
			},
			scale: function () {
				return anime.random(1, 5);
			},
			easing: "linear",
			duration: 3000,
			delay: anime.stagger(10),
			complete: animateBlocks,
		});
	}

	animateBlocks();
};

function createEl(type, attributes, ...children) {
	const el = document.createElement(type);

	for (key in attributes) {
		el.setAttribute(key, attributes[key]);
	}

	children.forEach((child) => {
		if (typeof child === "string" || typeof child === "number") {
			el.appendChild(document.createTextNode(child));
		} else {
			el.appendChild(child);
		}
	});

	return el;
}
