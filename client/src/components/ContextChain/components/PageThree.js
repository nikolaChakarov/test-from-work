import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { ChainContext } from "../context/ChainState";

const PageThree = () => {
	const history = useHistory();

	const { state, onDataSubmit } = useContext(ChainContext);
	const [localState, setLocalState] = useState({
		password2: "",
	});

	const onInputChange = (e) => {
		setLocalState({
			password2: e.target.value,
		});
	};

	console.log(state, "page three");
	return (
		<div className="container-fluid" id="page-three">
			<h1>Page Three</h1>
			<div className="input-set">
				<label htmlFor="password2">repeat password</label>
				<input
					type="text"
					id="password2"
					name="password2"
					value={localState.password2}
					onChange={onInputChange}
				/>
			</div>

			<div className="paginate-bttns">
				<button
					onClick={() => history.push("/page-two")}
					className="btn bttn-custom bttn-prev"
				>
					Prev
				</button>
				<button
					onClick={() => {
						onDataSubmit({
							input: "password2",
							value: localState.password2,
						});
						history.push("/page-end");
					}}
					className="btn bttn-custom bttn-next"
				>
					Next
				</button>
			</div>
		</div>
	);
};

export default PageThree;
