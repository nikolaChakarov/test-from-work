const mongoose = require("mongoose");

const mongooseConfig = () => {
	return mongoose
		.connect(process.env.MONGO_URL)
		.then((data) => {
			console.log("database connected");
		})
		.catch((err) => console.log(err));
};

module.exports = mongooseConfig;
