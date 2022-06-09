import { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

const init = {};

export const GlobalContext = createContext(init);

export const GlobalProvider = ({ children }) => {

    const [appState, dispatch] = useReducer(AppReducer, init);

    return <GlobalContext.Provider value={{
        appState,
        dispatch
    }}>
        {children}
    </GlobalContext.Provider>
}