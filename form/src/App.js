import { Switch, Route } from "react-router-dom";
import "./App.scss";

import Nav from "./components/Nav";
import Form from "./components/Form";

const App = () => {
	return (
		<div className="container-fluid" id="app">
			<Nav />
			<Switch>
				<Route path={"/form"} component={Form} />
			</Switch>
		</div>
	);
};

export default App;
