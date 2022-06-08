import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "../../context/GlobalState";
import styled from "styled-components";

import useForm from "../../hooks/useForm";

const Register = () => {
	const navigate = useNavigate();
	const { registerUser, registerError, user } = useContext(GlobalContext);

	const { values, handleInputChange, handleSubmit } = useForm(sendData, {
		username: "",
		email: "",
		password: "",
		password2: "",
	});

	function sendData() {
		registerUser(values);
	}

	useEffect(() => {
		if (registerError === "" && user) {
			navigate("/");
		}
	}, [user, registerError]);

	return (
		<RegisterContainer>
			<div className="register-wrapper">
				<div className="register-left">
					<h3 className="register-logo">Logo</h3>
					<span className="register-desc">
						Connect with friends and the world around you on our app
					</span>
				</div>
				<div className="register-right">
					<div className="register-box">
						<input
							type="text"
							placeholder="Username"
							className="register-input"
							name="username"
							value={values.username}
							onChange={handleInputChange}
						/>
						<input
							type="text"
							placeholder="Email"
							className="register-input"
							name="email"
							value={values.email}
							onChange={handleInputChange}
						/>
						<input
							type="text"
							placeholder="Password"
							className="register-input"
							name="password"
							value={values.password}
							onChange={handleInputChange}
						/>
						<input
							type="text"
							placeholder="Password Again"
							className="register-input"
							name="password2"
							value={values.password2}
							onChange={handleInputChange}
						/>
						<button className="register-bttn" onClick={handleSubmit}>
							Sign Up
						</button>
						<button className="register-register-bttn">Log into Account</button>
					</div>
				</div>
			</div>
		</RegisterContainer>
	);
};

const RegisterContainer = styled.div`
	background: #f0f2f5;
	width: 100%;
	height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;

	.register-wrapper {
		width: 70%;
		height: 70%;
		display: flex;
	}

	.register-left,
	.register-right {
		flex: 1;
		display: flex;
		flex-direction: column;
		justify-content: center;
	}

	.register-logo {
		font-size: 50px;
		font-weight: 800;
		color: #1775ee;
		margin-bottom: 10px;
	}

	.register-desc {
		font-size: 24px;
	}

	.register-box {
		height: 400px;
		padding: 20px;
		background: #fff;
		border-radius: 10px;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}

	.register-input {
		height: 50px;
		border-radius: 10px;
		border: 1px solid grey;
		font-size: 18px;
		padding-left: 20px;
	}

	.register-bttn {
		height: 50px;
		border-radius: 10px;
		border: none;
		background: #1775ee;
		color: #fff;
		font-size: 20px;
		font-weight: 500;
		cursor: pointer;
	}

	.register-forgot {
		text-align: center;
		color: #1775ee;
	}

	.register-register-bttn {
		width: 60%;
		align-self: center;
		height: 50px;
		border-radius: 10px;
		border: none;
		background: #42b72a;
		color: #fff;
		font-size: 20px;
		font-weight: 500;
		cursor: pointer;
	}
`;

export default Register;
