import { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

const init = {
	tasks: [],
};

export const GlobalContext = createContext(init);

export const GlobalProvider = ({ children }) => {
	const [appState, dispatch] = useReducer(AppReducer, init);

	return (
		<GlobalContext.Provider
			value={{
				tasks: appState.tasks,
				dispatch,
			}}
		>
			{children}
		</GlobalContext.Provider>
	);
};
