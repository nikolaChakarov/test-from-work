/* to delete */
import { userData } from "../db";

import { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

const init = {
	customers: [],
	userData: [],
	notifications: 0,
	scrollY: 0,
	getUserData: () => {},
};

export const GlobalContext = createContext(init);

export const GlobalProvider = ({ children }) => {
	const [appState, dispatch] = useReducer(AppReducer, init);

	const getUserData = async () => {
		// fetch from API and change the code

		try {
			let res = await new Promise((resolve, reject) => {
				resolve(userData);
			});

			if (!res) {
				throw "Server Error";
			}

			dispatch({
				type: "GET_USER_DATA",
				payload: res,
			});
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<GlobalContext.Provider
			value={{
				customers: appState.customers,
				notifications: appState.notifications,
				scrollY: appState.scrollY,
				userData: appState.userData,
				getUserData,
			}}
		>
			{children}
		</GlobalContext.Provider>
	);
};
