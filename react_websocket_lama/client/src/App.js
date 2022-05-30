import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "./context/GlobalState";

import "./app.css";

import Login from "./components/login/Login";
import Navbar from "./components/navbar/Navbar";
import Card from "./components/card/Card";

const App = () => {
	const { user, socket, posts, logout, getPosts } = useContext(GlobalContext);

	useEffect(() => {
		getPosts();
	}, []);

	useEffect(() => {
		if (!socket) return;

		socket.emit("newUser", user);
	}, [socket, user]);

	return (
		<div className="container">
			{user ? (
				<>
					<Navbar />
					{posts.map((el, i) => (
						<Card key={i} post={el} />
					))}

					<span className="username">{user}</span>
					<button
						className="logout-bttn"
						onClick={() => {
							socket.emit("disconnect");
							logout();
						}}
					>
						logout
					</button>
				</>
			) : (
				<Login />
			)}
		</div>
	);
};
export default App;
