import React from "react";
import styled from "styled-components";

const Login = () => {
	return (
		<LoginContainer>
			<div className="login-wrapper">
				<div className="login-left">
					<h3 className="login-logo">Logo</h3>
					<span className="login-desc">
						Connect with friends and the world around you on our app
					</span>
				</div>
				<div className="login-right">
					<div className="login-box">
						<input type="text" placeholder="email" className="login-input" />
						<input type="text" placeholder="password" className="login-input" />
						<button className="login-bttn">Log In</button>
						<span className="login-forgot">Forgot Pssword?</span>
						<button className="login-register-bttn">
							Create a new account
						</button>
					</div>
				</div>
			</div>
		</LoginContainer>
	);
};

const LoginContainer = styled.div`
	background: #f0f2f5;
	width: 100%;
	height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;

	.login-wrapper {
		width: 70%;
		height: 70%;
		display: flex;
	}

	.login-left,
	.login-right {
		flex: 1;
		display: flex;
		flex-direction: column;
		justify-content: center;
	}

	.login-logo {
		font-size: 50px;
		font-weight: 800;
		color: #1775ee;
		margin-bottom: 10px;
	}

	.login-desc {
		font-size: 24px;
	}

	.login-box {
		height: 300px;
		padding: 20px;
		background: #fff;
		border-radius: 10px;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}

	.login-input {
		height: 50px;
		border-radius: 10px;
		border: 1px solid grey;
		font-size: 18px;
		padding-left: 20px;
	}

	.login-bttn {
		height: 50px;
		border-radius: 10px;
		border: none;
		background: #1775ee;
		color: #fff;
		font-size: 20px;
		font-weight: 500;
		cursor: pointer;
	}

	.login-forgot {
		text-align: center;
		color: #1775ee;
	}

	.login-register-bttn {
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

export default Login;
