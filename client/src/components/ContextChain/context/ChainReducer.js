export const chainReducer = (state, payload) => {
	switch (payload.type) {
		case "INPUT_CHANGE":
			console.log(payload, payload.input, payload.value, "reducer...");
			return {
				...state,
				[payload.data.input]: payload.data.value,
			};

		default:
			return { ...state };
	}
};
