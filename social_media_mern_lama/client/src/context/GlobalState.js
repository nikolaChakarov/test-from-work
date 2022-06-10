import { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

import { Posts, Users } from "../dummyData";

const init = {
	user: localStorage.getItem("user")
		? JSON.parse(localStorage.getItem("user"))
		: null,
	users: [],
	posts: [],
	allUserPosts: [],
	registerUser: (userdata) => {},
	loginUser: (userdata) => {},
	registerError: "",
	loginError: "",
	getAllUsers: () => {},
	getAllPosts: () => {},
	getAllUserPosts: (username) => {},
};

export const GlobalContext = createContext(init);

export const GlobalProvider = ({ children }) => {
	const [appState, dispatch] = useReducer(AppReducer, init);

	const getAllUsers = () => {
		try {
			dispatch({
				type: "GET_ALL_USERS",
				payload: Users,
			});
		} catch (err) {
			console.log(err);
		}
	};

	const getAllPosts = async (id) => {
		try {
			const dbRes = await (
				await fetch(`http://localhost:5005/api/posts/timeline/${id}`, {
					headers: {
						"x-auth-token": appState.user.token,
					},
				})
			).json();

			dispatch({
				type: "ALL_POSTS",
				payload: dbRes,
			});
		} catch (err) {
			console.log(err);
		}
	};

	const getAllUserPosts = async (username) => {
		try {
			const dbRes = await (
				await fetch(`http://localhost:5005/api/posts/profile/${username}`, {
					headers: {
						"x-auth-token": appState.user.token,
					},
				})
			).json();

			dispatch({
				type: "ALL_USER_POSTS",
				payload: dbRes,
			});
		} catch (err) {
			console.log(err);
		}
	};

	const registerUser = async (userdata) => {
		try {
			dispatch({
				type: "CLEAR_REGISTER_ERROR",
			});

			const dbRegisterRes = await (
				await fetch("http://localhost:5005/api/auth/register", {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify(userdata),
				})
			).json();

			if (dbRegisterRes.status === "fail") {
				dispatch({
					type: "REGISTER_ERROR",
					payload: dbRegisterRes.message,
				});

				throw dbRegisterRes.message;
			}

			localStorage.setItem("user", JSON.stringify(dbRegisterRes.payload));

			dispatch({
				type: "REGISTER/LOGIN",
				payload: dbRegisterRes.payload,
			});
		} catch (err) {
			console.log(err);
		}
	};

	const loginUser = async (userdata) => {
		try {
			dispatch({
				type: "CLEAR_LOGIN_ERROR",
			});

			const dbRes = await (
				await fetch("http://localhost:5005/api/auth/login", {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify(userdata),
				})
			).json();

			if (dbRes.status === "fail") {
				dispatch({
					type: "LOGIN_ERROR",
					payload: dbRes.message,
				});
				throw dbRes.message;
			}

			localStorage.setItem("user", JSON.stringify(dbRes.payload));

			dispatch({
				type: "REGISTER/LOGIN",
				payload: dbRes.payload,
			});
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<GlobalContext.Provider
			value={{
				user: appState.user,
				posts: appState.posts,
				users: appState.users,
				allUserPosts: appState.allUserPosts,
				dispatch,
				registerUser,
				loginUser,
				registerError: appState.registerError,
				loginError: appState.loginError,
				profileUser: appState.profileUser,
				getAllUsers,
				getAllPosts,
				getAllUserPosts,
			}}
		>
			{children}
		</GlobalContext.Provider>
	);
};
