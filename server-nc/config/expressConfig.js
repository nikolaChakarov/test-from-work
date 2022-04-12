const express = require("express");
const cors = require("cors");
const router = require("../router");
const expressLayouts = require("express-ejs-layouts");
const path = require("path");

const expressConfig = (app) => {
	app.use(
		cors({
			origin: "http://localhost:3000",
		})
	);

	app.use(expressLayouts);
	app.set("view engine", "ejs");
	app.use(express.static(path.join(process.env.dirname, "/public")));

	app.use(express.json());

	app.use(express.urlencoded({ extended: true }));

	app.use(router);
};

module.exports = expressConfig;
