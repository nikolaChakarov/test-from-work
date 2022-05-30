window.onload = () => {
	// Make connection
	let socket = io.connect("http://localhost:8080");

	// Query DOM
	let messageEl = document.getElementById("message");
	let handleEl = document.getElementById("handle");
	let bttn = document.getElementById("send");
	let outputEl = document.getElementById("output");
	let feedbackEl = document.getElementById("feedback");

	// Emit Events
	bttn.addEventListener("click", () => {
		socket.emit("chat", {
			message: messageEl.value,
			handle: handleEl.value,
		});
	});

	messageEl.addEventListener("keypress", () => {
		socket.emit("typing", handleEl.value);
	});

	// Listen for Events
	socket.on("chat", (data) => {
		feedbackEl.innerHTML = "";

		outputEl.innerHTML +=
			"<p><strong>" + data.handle + ":</strong>" + data.message + "</p>";
	});

	socket.on("typing", (username) => {
		feedbackEl.innerHTML =
			"<p><em>" + username + "is typing a message..." + "</em></p>";
	});
};
