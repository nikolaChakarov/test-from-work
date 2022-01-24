import React, { useState } from "react";
import "./InputWithBttnInside.scss";

const InputWithBttnInside = () => {
	const [state, setState] = useState({
		info: "",
	});

	const onInputChange = (e) => {
		setState({
			...state,
			[e.target.name]: e.target.value,
		});
	};

	const sendData = () => {
		console.log(state.info);

		setState({
			...state,
			info: "",
		});
	};

	return (
		<div className="container-fluid" id="input-with-bttn-inside">
			<label>
				<p>Some Info</p>
				<input
					type="text"
					name="info"
					value={state.info}
					onChange={onInputChange}
				/>

				<img
					src="/img/calendar/plus.svg"
					alt="plus icon"
					style={{
						display: state.info !== "" ? "block" : "",
					}}
					onClick={sendData}
				/>
			</label>
		</div>
	);
};

export default InputWithBttnInside;
