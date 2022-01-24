import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";

import { ChainContext } from "../context/ChainState";

const PageOne = () => {
	const history = useHistory();

	const { state, onDataSubmit } = useContext(ChainContext);
	const [localState, setLocalState] = useState({
		username: "",
	});

	const onInputChange = (e) => {
		setLocalState({
			username: e.target.value,
		});
	};

	console.log(state, "page one");

	return (
		<div className="container-fluid" id="page-one">
			<h1>Page One</h1>
			<div className="input-set">
				<label htmlFor="username">username</label>
				<input
					type="text"
					id="username"
					name="username"
					value={localState.username}
					onChange={onInputChange}
				/>
			</div>

			<div className="paginate-bttns">
				<button
					onClick={() => {
						onDataSubmit({
							input: "username",
							value: localState.username,
						});
						history.push("/page-two");
					}}
					className="btn bttn-custom bttn-next"
				>
					Next
				</button>
			</div>
		</div>
	);
};

export default PageOne;
