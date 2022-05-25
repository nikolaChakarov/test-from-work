import Topbar from "./components/Topbar/Topbar";
import Sidebar from "./components/Sidebar/Sidebar";
import Info from "./components/Info/Info";

import CircularStatic from "./components/Progress/Progress";

import styled from "styled-components";

const App = () => {
	return (
		<AppContainer>
			<Topbar />
			<InnerAppWrapper>
				<Sidebar />
				<CircularStatic />
			</InnerAppWrapper>
		</AppContainer>
	);
};

const AppContainer = styled.section`
	display: flex;
	flex-direction: column;
	height: 100vh;

	/* & *::-webkit-scrollbar {
		display: none;
	} */

	.temp {
		flex: 4;
		overflow-y: scroll;
	}
`;

const InnerAppWrapper = styled.section`
	display: flex;
	flex: 1;
	overflow-y: scroll;
`;

export default App;
