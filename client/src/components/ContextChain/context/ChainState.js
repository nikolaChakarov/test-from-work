import { createContext, useReducer } from "react";
import { chainReducer } from "./ChainReducer";

const initState = {
	username: "",
	password: "",
	password2: "",
};

export const ChainContext = createContext(initState);

export const ChainProvider = ({ children }) => {
	const [state, dispatch] = useReducer(chainReducer, initState);

	const onDataSubmit = (dataObj) => {
		const currentInput = dataObj.input;
		const currentValue = dataObj.value;

		console.log(dataObj, "--------------");

		dispatch({
			type: "INPUT_CHANGE",
			data: {
				input: currentInput,
				value: currentValue,
			},
		});
	};

	return (
		<ChainContext.Provider
			value={{
				state,
				onDataSubmit,
			}}
		>
			{children}
		</ChainContext.Provider>
	);
};
