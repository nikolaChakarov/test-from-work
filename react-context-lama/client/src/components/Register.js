import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Register = () => {
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
					<form className="register-box">
						<input
							type="text"
							placeholder="Username"
							className="register-input"
							name="username"
						/>
						<input
							type="text"
							placeholder="Email"
							className="register-input"
							name="email"
						/>
						<input
							type="text"
							placeholder="Password"
							className="register-input"
							name="password"
						/>
						<input
							type="text"
							placeholder="Password Again"
							className="register-input"
							name="password2"
						/>
						<button className="register-bttn">Sign Up</button>
						<Link to={"/login"} className="login-link">
							Log into Account
						</Link>
					</form>
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

	.login-link {
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
		display: flex;
		align-items: center;
		justify-content: center;
	}
`;

export default Register;
