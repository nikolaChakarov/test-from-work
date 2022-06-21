import { Route, Routes } from "react-router-dom";
import "./index.css";
import styled from "styled-components";

import Header from "./components/Header";
import Debounce from "./components/Debounce";
import Throttle from "./components/Throttle";

const App = () => {
	return (
		<AppEl>
			<Header />

			<Routes>
				<Route path="/debounce" element={<Debounce />} />
				<Route path="/throttle" element={<Throttle />} />
			</Routes>
		</AppEl>
	);
};

const AppEl = styled.div`
	padding: 0;
	margin: 0;
	display: flex;
	flex-direction: column;
	/* height: 100vh; // useScroll not working! */
`;

export default App;
