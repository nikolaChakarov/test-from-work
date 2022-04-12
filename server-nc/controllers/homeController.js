const fs = require("fs");
const pdf = require("pdf-creator-node");
const path = require("path");
const options = require("../helpers/options");
const data = require("../helpers/data");

const homeview = (req, res, next) => {
	res.render("home");
};

const generatePdf = async (req, res, next) => {
	const html = fs.readFileSync(
		path.join(__dirname, "../views/template.html"),
		"utf-8"
	);
	const filename = Math.random() + "_doc.pdf";
	const arr = [];

	data.forEach((d) => {
		const prod = {
			name: d.name,
			description: d.description,
			unit: d.unit,
			quantity: d.quantity,
			price: d.price,
			total: d.quantity * d.price,
			imgurl: d.imgurl,
		};
		arr.push(prod);
	});

	let subtotal = 0;
	arr.forEach((el) => {
		subtotal += el.total;
	});

	const tax = (subtotal * 20) / 100;
	const grandtotal = subtotal - tax;
	const obj = {
		prodlist: arr,
		subtotal,
		tax,
		gtotal: grandtotal,
	};

	const doucument = {
		html: html,
		data: {
			products: obj,
		},
		path: "./docs" + filename,
	};

	pdf
		.create(doucument, options)
		.then((res) => {
			console.log(res);
		})
		.catch((err) => console.log(err));

	const filepath = "http://localhost:7007/docs" + filename;

	res.rednder("download");
};

module.exports = {
	homeview,
	generatePdf,
};
