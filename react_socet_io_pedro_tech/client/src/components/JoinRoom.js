import { useContext, useState } from "react";
import styled from "styled-components";
import { GlobalContext } from "../context/GlobalState";

const JoinRoom = () => {
	const { socket, dispatch } = useContext(GlobalContext);

	const [username, setUsername] = useState("");
	const [room, setRoom] = useState("");

	const joinRoom = () => {
		if (username && room) {
			socket.emit("join_room", room);

			dispatch({
				type: "JOIN_ROOM",
				payload: { username, room },
			});
		}
	};

	const handleKeyDown = (e) => {
		e.preventDefault();
		if (e.keyCode === 13) {
			joinRoom();
		}
	};

	return (
		<JoinRoomContainer>
			<h3>Join A Chat</h3>
			<input
				type="text"
				placeholder="username"
				onChange={(e) => setUsername(e.target.value)}
			/>
			<input
				type="text"
				placeholder="room ID"
				onChange={(e) => setRoom(e.target.value)}
			/>
			<button onClick={joinRoom} onKeyDown={handleKeyDown}>
				Join A Room
			</button>
		</JoinRoomContainer>
	);
};

const JoinRoomContainer = styled.div``;

export default JoinRoom;
