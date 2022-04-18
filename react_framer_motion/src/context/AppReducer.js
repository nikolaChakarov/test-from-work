const AppReducer = (state, action) => {
	switch (action.type) {
		case "ADD_BASE":
			return {
				...state,
				pizza: {
					...state.pizza,
					base: action.payload,
				},
			};
		case "ADD_TOPPING":
			return {
				...state,
				pizza: {
					...state.pizza,
					toppings: [action.payload, ...state.pizza.toppings],
				},
			};
		case "ADD_ORDER":
			return {
				...state,
				orders: [action.payload, ...state.orders],
			};

		default:
			return state;
	}
};

export default AppReducer;
