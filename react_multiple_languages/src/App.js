import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import styled from "styled-components";

import Header from "./components/Header";
import Home from "./pages/Home";
import Profile from "./pages/Profile";

const App = () => {
	return (
		<Suspense fallback={null}>
			<AppContainer>
				<Header />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/profile" element={<Profile />} />
				</Routes>
			</AppContainer>
		</Suspense>
	);
};

const AppContainer = styled.div``;

export default App;
