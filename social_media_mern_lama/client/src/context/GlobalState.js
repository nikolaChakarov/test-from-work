import { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

import { Posts, Users } from "../dummyData";

const init = {
	users: [],
	posts: [],
	getAllUsers: () => {},
	getAllPosts: () => {},
};

export const GlobalContext = createContext(init);

export const GlobalProvider = ({ children }) => {
	const [appState, dispatch] = useReducer(AppReducer, init);

	const getAllUsers = () => {
		dispatch({
			type: "GET_ALL_USERS",
			payload: Users,
		});
	};

	const getAllPosts = async (id) => {
		try {
			// get from db later...

			dispatch({
				type: "ALL_POSTS",
				payload: Posts,
			});
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<GlobalContext.Provider
			value={{
				posts: appState.posts,
				users: appState.users,
				dispatch,
				getAllUsers,
				getAllPosts,
			}}
		>
			{children}
		</GlobalContext.Provider>
	);
};
