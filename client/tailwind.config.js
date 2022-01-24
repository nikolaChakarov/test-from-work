module.exports = {
	purge: ["./src/**/*.{js, jsx, ts, tsx}", "/pyblic/index.html"],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			fontFamily: {
				sans: ["Open Sans"],
			},
			gridTemplateColumns: {
				"1/5": "1fr 5fr",
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [require("@tailwindcss/forms")],
};
