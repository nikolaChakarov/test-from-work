require("dotenv").config();
const express = require("express");
const app = express();
const http = require("http");
const cors = require("cors");

const { Server } = require("socket.io");

app.use(cors());
const server = http.createServer(app);

const io = new Server(server, {
	cors: {
		origin: "http://localhost:3001",
	},
});

io.on("connection", (socket) => {
	console.log(`User connected: ${socket.id}`);

	socket.on("join_room", (room) => {
		socket.join(room);
		console.log(`User with ID: ${socket.id} joined room: ${room}`);
	});

	socket.on("send_message", (data) => {
		console.log(data);
		socket.to(data.room).emit("receive_message", data);
	});

	socket.on("disconnect", () => {
		console.log("User Disconnected", socket.id);
	});
});

const PORT = process.env.PORT;
server.listen(PORT, () => {
	console.log(`Server is listening at port ${PORT}`);
});
