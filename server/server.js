const express = require("express");

const app = express();

const expressConfig = require("./config/express");

expressConfig(app);

app.listen(7007, () => {
	console.log("app is listening at port 7007");
});
