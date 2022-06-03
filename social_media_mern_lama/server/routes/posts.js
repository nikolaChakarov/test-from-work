const router = require("express").Router();
const isAuth = require("../middlewares/isAuth");
const Post = require("../models/Post");
const User = require("../models/User");

// create a post
router.post("/", isAuth, async (req, res) => {
	const { userId } = req.user;

	try {
		const post = new Post({ userId, ...req.body });

		let dbRes = await post.save();

		res.status(200).json({ status: "success", post: dbRes });
	} catch (err) {
		console.log(err);
		res.status(500).json({ status: "fail", message: err });
	}
});

// update a post
router.put("/:id", isAuth, async (req, res) => {
	const { userId } = req.user;

	try {
		const post = await Post.findById(req.params.id);

		if (!post) {
			throw "Post not found";
		}

		if (userId !== post.userId) {
			throw "You are not allowed to update this post";
		}

		const updated = await Post.findByIdAndUpdate(
			req.params.id,
			{ $set: req.body },
			{ new: true }
		);

		res.status(200).json({ status: "success", post: updated });
	} catch (err) {
		console.log(err);
		res.status(500).json({ status: "fail", message: err });
	}
});

// delete a post
router.delete("/:id", isAuth, async (req, res) => {
	const { userId } = req.user;

	try {
		const post = await Post.findById(req.params.id);

		if (!post) {
			throw "Post not found";
		}

		if (userId !== post.userId) {
			throw "You are not allowed to delete this post";
		}

		const updated = await post.deleteOne();

		res
			.status(200)
			.json({ status: "success", message: "post has been deleted" });
	} catch (err) {
		console.log(err);
		res.status(500).json({ status: "fail", message: err });
	}
});

// like a post
router.put("/:id/like", isAuth, async (req, res) => {
	const { userId } = req.user;

	console.log(req.user);

	try {
		const post = await Post.findById(req.params.id);

		if (!post) {
			throw "Post not found";
		}

		if (userId === post.userId) {
			throw "You are not allowed to like your post";
		}

		let updated;
		let msg;
		if (post.likes.includes(userId)) {
			updated = await post.updateOne({
				$pull: { likes: userId },
			});

			msg = "post uliked";
		} else {
			updated = await post.updateOne({
				$push: { likes: userId },
			});
			msg = "post liked";
		}

		res.status(200).json({ status: "success", message: msg });
	} catch (err) {
		console.log(err);
		res.status(500).json({ status: "fail", message: err });
	}
});

// get a post
router.get("/:id", isAuth, async (req, res) => {
	try {
		const post = await Post.findById(req.params.id);

		res.status(200).json(post);
	} catch (err) {
		console.log(err);
		res.status(500).json({ status: "fail", message: err });
	}
});

// get timeline posts
router.get("/timeline/all", isAuth, async (req, res) => {
	try {
		const currentUser = await User.findById(req.user.userId);
		const currentUserPosts = await Post.find({ userId: currentUser._id });

		const friendPosts = await Promise.all(
			currentUser.followings.map((friendId) => Post.find({ userId: friendId }))
		);

		res.status(200).json(currentUserPosts.concat(...friendPosts));
	} catch (err) {
		console.log(err);
		res.status(500).json({ status: "fail", message: err });
	}
});

module.exports = router;
