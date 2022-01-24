const express = require("express");
const app = express();
const expressConfig = require("./config/expressConfig");
require("dotenv").config();

expressConfig(app);

app.listen(5005, () => {
	console.log("server is listening at 5005");
});
