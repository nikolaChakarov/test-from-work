const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const router = require("../router");

const expressConfig = (app) => {
	app.use(express.json());

	app.use(
		cors({
			origin: "http://localhost:3001",
			optionsSuccessStatus: 200,
		})
	);

	app.use(helmet());

	app.use(morgan("common"));

	app.use(router);
};

module.exports = expressConfig;
