import { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

import { Posts, Users } from "../dummyData";

const init = {
	usersComments: [],
	posts: [],
	getUsersComments: () => { },
	getAllPosts: () => { },
};

export const GlobalContext = createContext(init);

export const GlobalProvider = ({ children }) => {
	const [appState, dispatch] = useReducer(AppReducer, init);

	const getUsersComments = () => {

		dispatch({
			type: "USERS_COMMENTS",
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
				usersComments: appState.usersComments,
				dispatch,
				getUsersComments,
				getAllPosts,
			}}
		>
			{children}
		</GlobalContext.Provider>
	);
};
