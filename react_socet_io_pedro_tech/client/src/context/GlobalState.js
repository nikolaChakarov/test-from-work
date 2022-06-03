import { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

import io from "socket.io-client";

const init = {
	user: "",
	room: "",
	socket: io.connect("http://localhost:5005"),
};

export const GlobalContext = createContext(init);

export const GlobalProvider = ({ children }) => {
	const [appState, dispatch] = useReducer(AppReducer, init);

	return (
		<GlobalContext.Provider
			value={{
				user: appState.user,
				room: appState.room,
				socket: appState.socket,
				dispatch,
			}}
		>
			{children}
		</GlobalContext.Provider>
	);
};
