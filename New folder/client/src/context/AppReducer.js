const AppReducer = (state, action) => {
	switch (action.type) {
		case "USERS_COMMENTS":
			return {
				...state,
				usersComments: action.payload,
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
