const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
	username: String,
	password: String,
	email: {
		type: String,
		required: true,
	},
});

const User = mongoose.model("User", UserSchema);
module.exports = User;
