import React from "react";
import { GlobalProvider } from "./context/GlobalState";
import ReactDOM from "react-dom";
import App from "./App";

import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
	<Router>
		<GlobalProvider>
			<App />
		</GlobalProvider>
	</Router>,
	document.getElementById("root")
);
