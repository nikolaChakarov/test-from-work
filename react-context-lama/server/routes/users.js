const router = require("express").Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const User = require("../models/User");

// api/users
router.post("/register", async (req, res) => {
	try {
		const { username, password, email } = req.body;

		let user = await User.findOne({ email: email });

		if (user) {
			throw new Error("email is already taken");
		}

		const hashed = await bcrypt.hash(password, Number(process.env.SALT));

		user = new User({
			username,
			email,
			password: hashed,
		});

		await user.save();

		const token = jwt.sign({ userId: user._id }, process.env.SECRET, {
			expiresIn: 3600000,
		});

		if (!token) {
			throw new Error("invalid token");
		}

		res.status(200).json({
			status: "success",
			payload: {
				token,
				username,
				email,
				userId: user._id,
			},
		});
	} catch (err) {
		console.log(err);
		res.status(500).json({ status: "fail", message: err.message });
	}
});

// api/users
router.post("/login", async (req, res) => {
	try {
		const { password, email } = req.body;

		let user = await User.findOne({ email: email });

		if (!user) {
			throw new Error("no such an user");
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
				email,
				token,
				username: user.username,
				userId: user._id,
			},
		});
	} catch (err) {
		console.log(err);
		res.status(500).json({ status: "fail", message: err.message });
	}
});

module.exports = router;
