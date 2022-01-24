const express = require("express");
const cors = require("cors");
const router = require("../router");

const expressConfig = (app) => {
	app.use(express.json());

	app.use(
		cors({
			origin: "http://localhost:3001",
			optionsSuccessStatus: 200, //
		})
	);

	app.use("/img", express.static("images"));

	app.use(router);
};

module.exports = expressConfig;
