const router = require("express").Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const User = require("../models/User");

router.post("/register", async (req, res) => {
	try {
		const { username, password, email } = req.body;

		let user = await User.findOne({ username: username });

		if (user) {
			throw "username is already taken";
		}

		const hashed = await bcrypt.hash(password, Number(process.env.SALT));

		user = new User({
			username,
			email,
			password: hashed,
		});

		let dbRes = await user.save();

		const token = jwt.sign({ userId: user._id }, process.env.SECRET, {
			expiresIn: 3600000,
		});

		if (!token) {
			throw "invalid token";
		}

		res.status(200).json({
			status: "success",
			payload: {
				token,
				username,
				userId: user._id,
			},
		});
	} catch (err) {
		console.log(err);
		res.status(500).json({ status: "fail", message: err });
	}
});

router.post("/login", async (req, res) => {
	try {
		const { password, username } = req.body;

		let user = await User.findOne({ username: username });

		if (!user) {
			throw "no such an user";
		}

		const isPassValid = await bcrypt.compare(password, user.password);

		if (!isPassValid) {
			throw "invalid credentials";
		}

		const token = jwt.sign({ userId: user._id }, process.env.SECRET, {
			expiresIn: 3600000,
		});

		if (!token) {
			throw "invalid token";
		}

		res.status(200).json({
			status: "success",
			payload: {
				username,
				token,
				userId: user._id,
			},
		});
	} catch (err) {
		console.log(err);
		res.status(500).json({ status: "fail", message: err });
	}
});

module.exports = router;
