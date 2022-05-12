require("dotenv").config();
const PORT = process.env.PORT;
const MONGO_DB = process.env.MONGO_DB;

const express = require("express");
const app = express();
const router = express.Router();

const mongoose = require("mongoose");
mongoose.set("strictQuery", false);

const User = require("./models/User");

app.use(express.json());
app.use(router);

router.post("/create", async (req, res) => {
	try {
		const { name, age } = req.body;

		const user = new User({ name, age });

		await user.save();

		res.status(200).json({ data: user });
	} catch (err) {
		console.log(err);
		res.status(500).json({ meg: err });
	}
});

router.get("/data", async (req, res) => {
	try {
		const dbResponse = await User.find(req.query);

		res.status(200).json({ length: dbResponse.length, data: dbResponse });
	} catch (error) {
		console.log(err);
		res.status(500).json({ meg: err });
	}
});

mongoose
	.connect(MONGO_DB)
	.then(() => {
		console.log("db connected");
		app.listen(PORT, () => {
			console.log(`server is listening at ${PORT}`);
		});
	})
	.catch((err) => console.log(err));
