const AppReducer = (state, action) => {
	// console.log(action.payload);
	switch (action.type) {
		case "GET_ALL_USERS":
			return {
				...state,
				users: action.payload,
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
