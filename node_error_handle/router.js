const router = require("express").Router();
const Hotel = require("./models/Hotel");

router.get("/api/hotels", (req, res, next) => {
	console.log("hotels route");

	try {
		res.json({ message: "ok" });
	} catch (err) {
		res.status(500).json({ status: "fail", message: err.message });
	}
});

module.exports = router;
