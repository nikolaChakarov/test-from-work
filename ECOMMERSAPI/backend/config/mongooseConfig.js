const mongoose = require("mongoose");

const mongooseConfig = () => {
	return mongoose
		.connect(process.env.DB)
		.then(() => {
			console.log("Database is connected.");
		})
		.catch((err) => {
			console.log(err);
		});
};

module.exports = mongooseConfig;
