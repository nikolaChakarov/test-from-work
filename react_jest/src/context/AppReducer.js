const AppReducer = (state, action) => {
	switch (action.type) {
		case "ADD_TODO":
			return {
				...state,
				tasks: [action.payload, ...state.tasks],
			};
		case "REMOVE_TODO":
			return {
				...state,
				tasks: [...state.tasks.filter((el) => el.id !== action.payload)],
			};

		case "TOGGLE_CHECKED":
			return {
				...state,
				tasks: [
					...state.tasks.map((el) =>
						el.id !== action.payload ? el : { ...el, checked: !el.checked }
					),
				],
			};

		default:
			return state;
	}
};

export default AppReducer;
