import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { ChainContext } from "../context/ChainState";

const PageTwo = () => {
	const history = useHistory();

	const { state, onDataSubmit } = useContext(ChainContext);
	const [localState, setLocalState] = useState({
		password: "",
	});

	const onInputChange = (e) => {
		setLocalState({
			password: e.target.value,
		});
	};

	console.log(state, "page two");

	return (
		<div className="container-fluid" id="page-two">
			<h1>Page Two</h1>
			<div className="input-set">
				<label htmlFor="password">password</label>
				<input
					type="text"
					id="password"
					name="password"
					value={localState.password}
					onChange={onInputChange}
				/>
			</div>

			<div className="paginate-bttns">
				<button
					onClick={() => history.push("/page-one")}
					className="btn bttn-custom bttn-prev"
				>
					Prev
				</button>
				<button
					onClick={() => {
						onDataSubmit({
							input: "password",
							value: localState.password,
						});
						history.push("/page-three");
					}}
					className="btn bttn-custom bttn-next"
				>
					Next
				</button>
			</div>
		</div>
	);
};

export default PageTwo;
