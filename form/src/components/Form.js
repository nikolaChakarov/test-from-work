import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { useForm } from "../hooks/hooks";

const Form = () => {
	const { registerUser } = useContext(GlobalContext);

	const onFormSubmit = (e) => {
		registerUser(values);

		setValues((prev) => {
			let reset = Object.fromEntries(
				Object.entries(prev).map(([k, v]) => [k, (v = "")])
			);

			return { ...reset };
		});
	};

	const { values, setValues, onChange, onSubmit } = useForm(onFormSubmit, {
		username: "",
		password: "",
		password2: "",
	});

	return (
		<div className="container-fluid" id="form">
			<form onSubmit={onSubmit}>
				<div className="input-set">
					<label>
						<span>username:</span>
						<input
							type="text"
							name="username"
							value={values.username}
							onChange={onChange}
						/>
					</label>
				</div>

				<div className="input-set">
					<label>
						<span>password:</span>
						<input
							type="text"
							name="password"
							value={values.password}
							onChange={onChange}
						/>
					</label>
				</div>

				<div className="input-set">
					<label>
						<span>repeat password:</span>
						<input
							type="text"
							name="password2"
							value={values.password2}
							onChange={onChange}
						/>
					</label>
				</div>
				<button>Submit</button>
			</form>
		</div>
	);
};

export default Form;
