import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import customTheme from "./theme/customTheme";

ReactDOM.render(
	<BrowserRouter>
		<ThemeProvider theme={customTheme}>
			<App />
		</ThemeProvider>
	</BrowserRouter>,
	document.getElementById("root")
);
