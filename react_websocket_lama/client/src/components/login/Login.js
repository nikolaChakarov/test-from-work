import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";
import useForm from "../../hooks/useForm";

import "./login.css";

const Login = () => {
	const { values, onInputChange, submitHandler } = useForm(sendInfo, {
		username: "",
	});

	const { login } = useContext(GlobalContext);

	function sendInfo() {
		login(values.username);
	}
	return (
		<div className="login">
			<input
				type="text"
				placeholder="username"
				name="username"
				value={values.username}
				onChange={onInputChange}
			/>
			<button onClick={submitHandler}>Login</button>
		</div>
	);
};

export default Login;
