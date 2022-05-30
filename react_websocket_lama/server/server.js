require("dotenv").config();

const { Server } = require("socket.io");
const io = new Server({
	cors: {
		origin: "http://localhost:3001",
	},
});

let onlineUsers = [];

const addNewUser = (username, socketId) => {
	!onlineUsers.some((user) => user.username === username) &&
		onlineUsers.push({ username, socketId });
};

const removeUser = (socketId) => {
	onlineUsers = onlineUsers.filter((user) => user.socketId !== socketId);
};

const getUser = (username) => {
	return onlineUsers.find((user) => user.username === username);
};

io.on("connection", (socket) => {
	socket.on("newUser", (username) => {
		addNewUser(username, socket.id);
		console.log(onlineUsers);
	});

	socket.on("sendNotification", ({ senderName, receiverName, type }) => {
		console.log(senderName, receiverName, type);
		console.log(onlineUsers);

		const receiver = getUser(receiverName);

		io.to(receiver.socketId).emit("getNotif", { senderName, type });
	});

	socket.on("disconect", () => {
		removeUser(socket.id);
	});
});

io.listen(process.env.PORT);
