const AppReducer = (state, action) => {
	switch (action.type) {
		case "LOGIN":
			return {
				...state,
				user: action.payload,
			};

		case "LOGOUT":
			return {
				...state,
				user: null,
			};

		case "GET_POSTS":
			return {
				...state,
				posts: [...action.payload],
			};

		case "SOCKET":
			return {
				...state,
				socket: action.payload,
			};

		default:
			return state;
	}
};

export default AppReducer;
