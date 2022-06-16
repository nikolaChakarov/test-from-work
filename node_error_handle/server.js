require("dotenv").config();
const express = require("express");
const app = express();

const cors = require("cors");
const router = require("./router");

app.use(express.json());
app.use(cors({ origin: "http://localhost:3000" }));

app.use((req, res, next) => {
	console.log("err middleware");
	next();
});

app.use(router);

// app.use((req, res, next) => {
// 	console.log("err middleware");
// 	res.send("...from middleware");
// });

app.listen(process.env.PORT, () => {
	console.log(`listening at ${process.env.PORT}`);
});
