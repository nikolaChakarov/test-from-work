const router = require("express").Router();
const fs = require("fs");
const path = require("path");

const dirname = __dirname;

const multer = require("multer");
const upload = multer({ dest: "uploads/" });

router.get("/file", (req, res, next) => {
	const data = req.body;

	res.status(200).json(data);
});

router.get("/getfile/:name", (req, res, next) => {
	const neededFileName = req.params.name;
	const file = dirname + "/db/" + neededFileName;

	res.status(200).download(file);
});

router.post("/images", upload.single("image"), async (req, res) => {
	console.log("xxxxxxxxxxxx");

	res.send("ok!");
});

module.exports = router;
