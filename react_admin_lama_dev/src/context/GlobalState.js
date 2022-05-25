import { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

const init = {
	customers: [],
	notifications: 0,
	scrollY: 0,
};

export const GlobalContext = createContext(init);

export const GlobalProvider = ({ children }) => {
	const [appState, dispatch] = useReducer(AppReducer, init);

	return (
		<GlobalContext.Provider
			value={{
				customers: appState.customers,
				notifications: appState.notifications,
				scrollY: appState.scrollY,
			}}
		>
			{children}
		</GlobalContext.Provider>
	);
};
