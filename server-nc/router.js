const router = require("express").Router();
// const fs = require("fs/promises");
const fs = require("fs");
const util = require("util");

/* to delete an already uploaded file */
const unlinkFile = util.promisify(fs.unlink);

const { uploadFile, getFileStream } = require("./s3");

const multer = require("multer");
const upload = multer({ dest: "uploads" });

const path = require("path");
const dir = __dirname;

const filePath = path.resolve(dir, "db.json");
const utilisateursPath = path.resolve(dir, "utilisateurs.json");

const db = require("./db");

router.get("/database", (req, res, next) => {
	res.json(db).status(200);
});

router.post("/update", (req, res, next) => {
	try {
		fs.readFile(filePath)
			.then((body) => JSON.parse(body))
			.then((res) => {
				let index = res.findIndex((el) => el._id === req.body._id);

				res[index].favoris = !res[index].favoris;
				return res;
			})
			.then((json) => JSON.stringify(json))
			.then((body) => fs.writeFile(filePath, body))
			.catch((err) => console.log(err));

		res.json(db).status(200);
	} catch (err) {
		console.log(err);
		res.json({ message: err.maessage }).status(500);
	}
});

router.get("/getfile/:name", (req, res, next) => {
	const neededFileName = req.params.name;
	const file = __dirname + "/db/" + neededFileName + ".txt";

	res.status(200).download(file);
});

/* upload image endpoint */
router.post("/images", upload.single("image"), async (req, res, next) => {
	const file = req.file;
	const data = req.body;

	try {
		const result = await uploadFile(file);

		unlinkFile(file.path);

		res.status(200).json({ imagePath: `/userimages/${result.Key}` });
	} catch (err) {
		console.error(err);

		res.status(500).json({ msg: err.message });
	}
});

/* read file image endpoint */
router.get("/images/:key", (req, res, next) => {
	const key = req.params.key;

	try {
		const readStream = getFileStream(key);

		readStream.pipe(res);
	} catch (err) {
		console.error(err.message);
		res.status(500).json({ msg: error.message });
	}
});

/* create utilisateur write in a json file */
router.post("/api/utilisateurs/create", async (req, res, next) => {
	try {
		const formData = req.body;
		jsonReader(utilisateursPath, (err, data) => {
			if (err) {
				console.error(err);
			} else {
				data.push(formData);
				fs.writeFile(utilisateursPath, JSON.stringify(data, null, 2), (err) => {
					if (err) {
						console.error(err);
					} else {
						res.status(200).json(data);
					}
				});
			}
		});
	} catch (err) {
		console.error(err);
	}
});

function jsonReader(filePath, cb) {
	fs.readFile(filePath, "utf-8", (err, fileData) => {
		if (err) {
			return cb(err);
		}

		try {
			const data = JSON.parse(fileData);
			return cb(null, data);
		} catch (err) {
			return cb(err);
		}
	});
}

module.exports = router;
