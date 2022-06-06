import styled from "styled-components";
import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";

const App = () => {
	return (
		<AppContainer>
			<Profile />
		</AppContainer>
	);
};

const AppContainer = styled.div``;

export default App;
