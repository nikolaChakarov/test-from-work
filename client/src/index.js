import React from "react";
import ContextWrapper from "./components/context/ContextWrapper";

import ReactDOM from "react-dom";
import App from "./App";

import "./index.scss";

import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
	<ContextWrapper>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</ContextWrapper>,
	document.getElementById("root")
);
