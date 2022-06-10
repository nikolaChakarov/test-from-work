const router = require("express").Router();
const isAuth = require("../middlewares/isAuth");
const User = require("../models/User");
const bcrypt = require("bcrypt");

// update user
router.put("/:id", isAuth, async (req, res) => {
	try {
		const currentUser = await User.findOne({ id: req.user.userId });
		const id = req.params.id;

		if (currentUser._id.toString() !== id && !currentUser.isAdmin) {
			throw "You can update only your account!";
		}

		let updatedInfo = {};
		let hashed;
		/* if we want to change the password, we must hash it again */
		const { password, ...data } = req.body;
		updatedInfo = { ...data };

		if (password) {
			hashed = await bcrypt.hash(password.toString(), Number(process.env.SALT));
			updatedInfo = Object.assign({ password: hashed }, { ...data });
		}

		const user = await User.findByIdAndUpdate(
			id,
			{ $set: updatedInfo },
			{ new: true }
		);
		res.status(200).json({ user });
	} catch (err) {
		console.log(err);
		res.status(500).json({ status: "fail", message: err });
	}
});

// delete user
router.delete("/:id", isAuth, async (req, res) => {
	try {
		const currentUser = await User.findOne({ id: req.user.userId });
		const id = req.params.id;

		if (currentUser._id.toString() !== id && !currentUser.isAdmin) {
			throw "You can delete only your account!";
		}

		const dbRes = await User.deleteOne({ _id: id });
		console.log(dbRes);

		res.status(200).json({ status: "success", message: "ok deleted" });
	} catch (err) {
		console.log(err);
		res.status(500).json({ status: "fail", message: err });
	}
});

// get a user
router.get("/", async (req, res) => {
	const userId = req.query.userId;
	const username = req.query.username;

	// const userId = req.params.id;

	try {
		const user = userId
			? await User.findById(userId)
			: await User.findOne({ username: username });

		if (!user) {
			throw "No such an user!";
		}

		const { password, createdAt, isAdmin, ...data } = user._doc;

		res.status(200).json({ message: "success", user: data });
	} catch (err) {
		console.log(err);
		res.status(500).json({ status: "fail", message: err });
	}
});

// follow a user
router.put("/:id/follow", isAuth, async (req, res) => {
	try {
		const currentUser = await User.findOne({ id: req.user.userId });

		if (currentUser.id === req.params.id) {
			throw "You cannot follow yourself";
		}

		const userToFollow = await User.findById(req.params.id);

		if (!userToFollow) {
			throw "No such a user to follow";
		}

		if (userToFollow.followers.includes(currentUser.id)) {
			throw "You allready follow this user";
		}

		await userToFollow.updateOne({ $push: { followers: currentUser._id } });
		await currentUser.updateOne({ $push: { followings: req.params.id } });

		res
			.status(200)
			.json({ status: "success", message: "user has been followed" });
	} catch (err) {
		console.log(err);
		res.status(500).json({ status: "fail", message: err });
	}
});

// unfollow a user
router.put("/:id/unfollow", isAuth, async (req, res) => {
	try {
		const currentUser = await User.findOne({ id: req.user.userId });

		if (currentUser.id === req.params.id) {
			throw "You cannot unfollow yourself";
		}

		const userToUnfollow = await User.findById(req.params.id);

		if (!userToUnfollow) {
			throw "No such a user to unfollow";
		}

		if (!userToUnfollow.followers.includes(currentUser.id)) {
			throw "You cannot unfollow this user";
		}

		await userToUnfollow.updateOne({ $pull: { followers: currentUser._id } });
		await currentUser.updateOne({ $pull: { followings: req.params.id } });

		res
			.status(200)
			.json({ status: "success", message: "user has been unfollowed" });
	} catch (err) {
		console.log(err);
		res.status(500).json({ status: "fail", message: err });
	}
});

module.exports = router;
