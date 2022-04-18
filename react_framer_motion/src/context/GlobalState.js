import { useReducer, createContext, useEffect } from "react";
import AppReducer from "./AppReducer";

const init = {
	pizza: {
		base: "",
		toppings: [],
	},
	addBase: (base) => {},
	addTopping: (topping) => {},
	removeTopping: (topping) => {},
	addOrder: (order) => {},
	orders: localStorage.getItem("orders")
		? JSON.parse(localStorage.getItem("orders"))
		: [],
};

export const GlobalContext = createContext(init);

export const GlobalProvider = ({ children }) => {
	const [state, dispatch] = useReducer(AppReducer, init);

	const addBase = (base) => {
		dispatch({
			type: "ADD_BASE",
			payload: base,
		});
	};

	const addTopping = (topping) => {
		dispatch({
			type: "ADD_TOPPING",
			payload: topping,
		});
	};

	const removeTopping = (topping) => {
		dispatch({
			type: "REMOVE_TOPPING",
			payload: topping,
		});
	};

	const addOrder = (order) => {
		dispatch({
			type: "ADD_ORDER",
			payload: order,
		});
	};

	useEffect(() => {
		localStorage.setItem("orders", JSON.stringify(state.orders));
	}, [state.orders]);

	return (
		<GlobalContext.Provider
			value={{
				pizza: state.pizza,
				orders: state.orders,
				addBase,
				addTopping,
				removeTopping,
				addOrder,
				dispatch,
			}}
		>
			{children}
		</GlobalContext.Provider>
	);
};
