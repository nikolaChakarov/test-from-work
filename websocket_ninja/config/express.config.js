const express = require("express");

const expressConfig = (app) => {
	app.use(express.json());

	app.use(express.static("public"));
};

module.exports = expressConfig;
