import React, { useContext, useState, useEffect } from "react";
import { GlobalContext } from "../context/GlobalState";

import styled from "styled-components";

const Chat = () => {
	const { socket, user, room } = useContext(GlobalContext);

	const [message, setMessage] = useState("");

	const sendMessage = async () => {
		if (!message) return;

		const messageData = {
			room,
			author: user,
			message,
			time:
				new Date(Date.now()).getHours() +
				":" +
				new Date(Date.now()).getMinutes(),
		};

		await socket.emit("send_message", messageData);
	};

	const handleKeyDown = (e) => {
		e.preventDefault();
		if (e.keyCode === 13) sendMessage();
	};

	useEffect(() => {
		socket.on("receive_message", (data) => {
			console.log(data);
		});
	}, []);

	return (
		<ChatContainer>
			<div className="chat-header">
				<h5>Live Chate</h5>
			</div>
			<div className="chat-body">
				<input
					type="text"
					placeholder="message"
					value={message}
					onChange={(e) => setMessage(e.target.value)}
				/>
				<button onClick={sendMessage} onKeyDown={handleKeyDown}>
					&#9658;
				</button>
			</div>
			<div className="chat-footer"></div>
		</ChatContainer>
	);
};

const ChatContainer = styled.div``;

export default Chat;
