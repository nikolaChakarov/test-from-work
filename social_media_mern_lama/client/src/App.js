import { Routes, Route } from "react-router-dom";

import styled from "styled-components";
import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";

const App = () => {
	return (
		<AppContainer>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/profile/:username" element={<Profile />} />
				<Route path="/login" element={<Login />} />
				<Route path="/register" element={<Register />} />
			</Routes>
		</AppContainer>
	);
};

const AppContainer = styled.div``;

export default App;
