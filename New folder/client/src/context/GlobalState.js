import { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

import { Posts, Users } from "../dummyData";

const init = {
	user: null,
	posts: [],
	getUser: (id) => {},
	getAllPosts: () => {},
};

export const GlobalContext = createContext(init);

export const GlobalProvider = ({ children }) => {
	const [appState, dispatch] = useReducer(AppReducer, init);

	const getUser = (id) => {
		// console.log(id);
		const currentUser = Users.find((el) => el.id === id);

		dispatch({
			type: "USER",
			payload: currentUser,
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
				user: appState.user,
				dispatch,
				getUser,
				getAllPosts,
			}}
		>
			{children}
		</GlobalContext.Provider>
	);
};
