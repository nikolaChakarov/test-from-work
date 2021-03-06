const router = require("express").Router();
const User = require("../models/User");

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// Regiter
router.post("/register", async (req, res) => {
	try {
		const { username, email, password, city, from, relationship } = req.body;

		let user = await User.findOne({ username });

		if (user) {
			throw "username is allready taken";
		}

		const hashedPass = await bcrypt.hash(password, Number(process.env.SALT));

		user = new User({
			username,
			email,
			password: hashedPass,
			city,
			from,
			relationship,
		});

		const token = jwt.sign({ userId: user._id }, process.env.SECRET, {
			expiresIn: 3600000,
		});

		await user.save();

		res.status(200).json({
			status: "success",
			payload: { username, userId: user._id, token },
		});
	} catch (err) {
		console.log(err);
		res.status(500).json({ status: "fail", message: err });
	}
});

// Login
router.post("/login", async (req, res) => {
	try {
		const { email, password } = req.body;

		const user = await User.findOne({ email });

		if (!user) {
			throw "Invalid credentials";
		}

		const isPassOk = await bcrypt.compare(password, user.password);

		if (!isPassOk) {
			throw "Invalid credentials";
		}

		const token = jwt.sign({ userId: user._id }, process.env.SECRET, {
			expiresIn: 3600000,
		});

		res.status(200).json({
			status: "success",
			payload: { username: user.username, email, userId: user._id, token },
		});
	} catch (err) {
		console.log(err);
		res.status(500).json({ status: "fail", message: err });
	}
});

module.exports = router;
