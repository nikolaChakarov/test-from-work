const AppReducer = (state, action) => {
	// console.log(action.payload);
	switch (action.type) {
		case "USER":
			return {
				...state,
				user: action.payload,
			};

		case "ALL_POSTS":
			return {
				...state,
				posts: [...action.payload],
			};

		default:
			return state;
	}
};

export default AppReducer;
