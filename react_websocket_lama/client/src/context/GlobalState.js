import { useEffect, createContext, useReducer } from "react";
import AppReducer from "./AppReducer";
import { io } from "socket.io-client";

import { posts } from "../data";

const init = {
	// user: localStorage.getItem("user")
	// 	? JSON.parse(localStorage.getItem("user"))
	// 	: null,
	user: null,
	socket: null,
	posts: [],
	getPosts: () => {},
	login: (name) => {},
	logout: () => {},
};

export const GlobalContext = createContext(init);

export const GlobalProvider = ({ children }) => {
	const [appState, dispatch] = useReducer(AppReducer, init);

	const login = (data) => {
		// localStorage.setItem("user", JSON.stringify(data));

		dispatch({
			type: "LOGIN",
			payload: data,
		});
	};

	const logout = () => {
		localStorage.removeItem("user");

		dispatch({
			type: "LOGOUT",
		});
	};

	const getPosts = () => {
		dispatch({
			type: "GET_POSTS",
			payload: posts,
		});
	};

	const setSocket = () => {
		dispatch({
			type: "SOCKET",
			payload: io("http://localhost:5005"),
		});
	};

	useEffect(() => {
		setSocket();
	}, []);

	return (
		<GlobalContext.Provider
			value={{
				user: appState.user,
				socket: appState.socket,
				data: appState.data,
				posts: appState.posts,
				getPosts,
				login,
				logout,
			}}
		>
			{children}
		</GlobalContext.Provider>
	);
};
