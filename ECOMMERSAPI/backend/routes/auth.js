const router = require("express").Router();
const User = require("../models/User");
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");

// REGISTER
router.post("/register", async (req, res) => {
	try {
		const { username, email, password } = req.body;

		const encryptedPass = CryptoJS.AES.encrypt(
			password,
			process.env.SECRET
		).toString();

		const user = new User({ username, email, password: encryptedPass });
		const dbResponse = await user.save();

		res.status(200).json(dbResponse);
	} catch (err) {
		console.log(err);
		res.status(500).json(err);
	}
});

// LOGIN
router.post("/login", async (req, res) => {
	try {
		const user = await User.findOne({ username: req.body.username });

		if (!user) {
			throw new Error("Wrong credentials.");
		}

		const hashPasss = CryptoJS.AES.decrypt(user.password, process.env.SECRET);

		const pass = hashPasss.toString(CryptoJS.enc.Utf8);
		if (pass !== req.body.password) {
			throw new Error("Wrong credentials.");
		}

		const token = jwt.sign(
			{
				id: user._id,
				isAdmin: user.isAdmin,
			},
			process.env.SECRET,
			{ expiresIn: "3d" }
		);

		const { password, ...userDataToSend } = user._doc;

		res.status(200).json({ ...userDataToSend, token });
	} catch (err) {
		res.status(500).json({ msg: err.message });
	}
});

module.exports = router;
