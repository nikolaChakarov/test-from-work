const AppReducer = (state, action) => {
	// console.log(action.payload);
	switch (action.type) {
		case "REGISTER/LOGIN":
			return {
				...state,
				user: action.payload,
			};

		case "REGISTER_ERROR":
			return {
				...state,
				registerError: action.payload,
			};
		case "CLEAR_REGISTER_ERROR":
			return {
				...state,
				registerError: "",
			};

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
