import { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

import { Posts, Users } from "../dummyData";

const init = {
	user: localStorage.getItem("user")
		? JSON.parse(localStorage.getItem("user"))
		: null,
	users: [],
	posts: [],
	registerUser: (userdata) => {},
	registerError: "",
	getAllUsers: () => {},
	getAllPosts: () => {},
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
			// get from db later...

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

	return (
		<GlobalContext.Provider
			value={{
				user: appState.user,
				posts: appState.posts,
				users: appState.users,
				dispatch,
				registerUser,
				registerError: appState.registerError,
				getAllUsers,
				getAllPosts,
			}}
		>
			{children}
		</GlobalContext.Provider>
	);
};
