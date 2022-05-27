import { Routes, Route } from "react-router-dom";

import Topbar from "./components/Topbar/Topbar";
import Sidebar from "./components/Sidebar/Sidebar";

import styled from "styled-components";
import Home from "./pages/home/Home";

const App = () => {
	return (
		<AppContainer>
			<Topbar />
			<Layout>
				<Sidebar />

				<div className="info">
					<Routes>
						<Route path="/" element={<Home />} />
					</Routes>
				</div>
			</Layout>
		</AppContainer>
	);
};

const AppContainer = styled.section`
	display: flex;
	flex-direction: column;
	height: 100vh;
`;

const Layout = styled.section`
	display: flex;
	flex: 1;
	overflow-y: scroll;

	.info {
		flex: 4;
		display: flex;
		flex-direction: column;
	}
`;

export default App;
