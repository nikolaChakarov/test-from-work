import { test } from "./func.js";

window.onload = function () {
	let quotesInfo = document.getElementById("quotes-template").innerHTML;

	let template = Handlebars.compile(quotesInfo);

	Handlebars.registerHelper("makeLink", function (text, url) {
		text = Handlebars.Utils.escapeExpression(text);
		url = Handlebars.Utils.escapeExpression(url);

		let theLink = `<a href="${url}">${text}</a>`;

		return new Handlebars.SafeString(theLink);
	});

	Handlebars.registerHelper("changeColor", function (text, options) {
		text = Handlebars.Utils.escapeExpression(text);

		if (options.hash.color === "red") {
			return new Handlebars.SafeString(`<span class="redText">${text}</span>`);
		} else if (options.hash.color === "blue") {
			return new Handlebars.SafeString(`<span class="blueText">${text}</span>`);
		} else {
			return new Handlebars.SafeString(
				`<span class="greenText">${text}</span>`
			);
		}
	});

	Handlebars.registerHelper("sayHello", function (options) {
		switch (options.data.lang) {
			case "spanish":
				return "Hola";
			case "french":
				return "Bonjour";
			default:
				return "Hello";
		}
	});

	let quotesData = template(
		{
			name: "nikola chakarov",
			quotes: [{ quote: "one" }, { quote: "two" }, { quote: "three" }],
			bio: "<i>Some italic text for testing...</i>",
		},
		{
			data: {
				lang: "spanish",
			},
		}
	);

	document.getElementById("data").innerHTML += quotesData;
};
