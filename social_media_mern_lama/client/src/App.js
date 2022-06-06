import styled from "styled-components";
import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
import Login from "./pages/login/Login";

const App = () => {
	return (
		<AppContainer>
			<Login />
		</AppContainer>
	);
};

const AppContainer = styled.div``;

export default App;
