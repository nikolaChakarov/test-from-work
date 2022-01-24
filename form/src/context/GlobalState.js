import { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

const initialState = {
	user: {},
	registerUser: (data) => {},
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
	const [state, dispatch] = useReducer(AppReducer, initialState);

	const registerUser = (user) => {
		console.log(user, "...from GlogalContext");
	};

	return (
		<GlobalContext.Provider
			value={{
				state,
				dispatch,
				registerUser,
			}}
		>
			{children}
		</GlobalContext.Provider>
	);
};
