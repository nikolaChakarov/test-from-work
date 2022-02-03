import React, { useReducer, useEffect } from "react";

const initialState = {
	count: 0,
	step: 1,
};
const ReactTest = () => {
	const [state, dispatch] = useReducer(reducder, initialState);

	useEffect(() => {
		const intervalID = setInterval(() => {
			dispatch({
				type: "tick",
			});
		}, 1000);

		return () => clearInterval(intervalID);
	}, [dispatch]);

	return (
		<div>
			<h1>{state.count}</h1>
			<input
				value={state.step}
				onChange={(e) => {
					dispatch({
						type: "step",
						step: Number(e.target.value),
					});
				}}
			/>
		</div>
	);
};

const reducder = (state, action) => {
	if (action.type === "tick") {
		return { ...state, count: state.count + state.step };
	} else if (action.type === "step") {
		return { ...state, step: action.step };
	} else {
		throw new Error();
	}
};

export default ReactTest;
