const fs = require("fs");

/* fs.readFileSync */

// try {
// 	const jsonString = fs.readFileSync("./utilisateurs.json", "utf-8");
// 	const data = JSON.parse(jsonString);

// 	console.log(data);
// } catch (err) {
// 	console.error(err);
// }

/* fs.readFile */

// fs.readFile("./utilisateurs.json", "utf-8", (err, jsonString) => {
// 	if (err) {
// 		console.log(err, "this is an error");
// 	} else {
// 		try {
// 			const data = JSON.parse(jsonString);

// 			console.log(data);
// 		} catch (err) {
// 			console.error(err);
// 		}
// 	}
// });

function jsonReader(filePath, cb) {
	fs.readFile(filePath, "utf-8", (err, fileData) => {
		if (err) {
			return cb && cb(err);
		}

		try {
			const object = JSON.parse(fileData);
			return cb && cb(null, object);
		} catch (err) {
			return cb && cb(err);
		}
	});
}

jsonReader("./utilisateurs.json", (err, data) => {
	if (err) {
		console.log(err);
	} else {
		data.push({ name: "second name in the list..." });

		fs.writeFile(
			"./utilisateurs.json",
			JSON.stringify(data, null, 2),
			(err) => {
				if (err) {
					console.error(err);
				} else {
					console.log("file was updated successfully!");
				}
			}
		);
	}
});

// const newObject = {
// 	name: "...send from a form",
// };

// fs.writeFile(
// 	"./utilisateurs.json",
// 	JSON.stringify(newObject, null, 2),
// 	(err) => {
// 		if (err) {
// 			console.error(err);
// 			return;
// 		}
// 		console.log("File successfully written!");
// 	}
// );
