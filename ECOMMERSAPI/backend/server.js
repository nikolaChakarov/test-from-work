const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();

const PORT = process.env.PORT || 5000;

const expressConfig = require("./config/expressConfig");
expressConfig(app);

const mongooseConfig = require("./config/mongooseConfig");

mongooseConfig()
	.then(() => {
		app.listen(PORT, () => {
			console.log(`App is listening at port ${PORT}`);
		});
	})
	.catch((err) => console.log(err));
