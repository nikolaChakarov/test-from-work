const AppReducer = (state, action) => {
	switch (action.type) {
		case "JOIN_ROOM":
			return {
				...state,
				user: action.payload.username,
				room: action.payload.room,
			};

		default:
			return state;
	}
};

export default AppReducer;
