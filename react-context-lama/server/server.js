require("dotenv").config();

const express = require("express");
const app = express();

const expressConfig = require("./config/express.config");
expressConfig(app);

const PORT = process.env.PORT;

const mongooseConfig = require("./config/mongoose.config");

mongooseConfig()
	.then(() => {
		app.listen(PORT, () => {
			console.log(`server is listening at port ${PORT}`);
		});
	})
	.catch((err) => console.log(err));
