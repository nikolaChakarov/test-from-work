require("dotenv").config();
let socket = require("socket.io");

const express = require("express");
const app = express();

const expressConfig = require("./config/express.config");
expressConfig(app);

const PORT = process.env.PORT;

let server = app.listen(PORT, () => {
	console.log(`server is on port: ${PORT}`);
});

// Socket setup
let io = socket(server);

io.on("connection", (socket) => {
	console.log(socket.id);
	console.log("made socket connetion");

	socket.on("chat", (data) => {
		io.sockets.emit("chat", data);
	});

	socket.on("typing", (username) => {
		socket.broadcast.emit("typing", username);
	});
});
