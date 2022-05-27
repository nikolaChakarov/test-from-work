const AppReducer = (state, action) => {
	switch (action.type) {
		case "GET_USER_DATA":
			return {
				...state,
				userData: [...action.payload],
			};

		default:
			return state;
	}
};

export default AppReducer;
