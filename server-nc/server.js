const express = require("express");
const app = express();
process.env.dirname = __dirname;
const expressConfig = require("./config/expressConfig");
require("dotenv").config();

expressConfig(app);

app.listen(7007, () => {
	console.log("server is listening at 7007");
});
