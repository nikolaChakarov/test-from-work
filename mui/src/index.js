import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@mui/material";
import customTheme from "./assets/theme";

ReactDOM.render(
	<BrowserRouter>
		<ThemeProvider theme={customTheme}>
			<App />
		</ThemeProvider>
	</BrowserRouter>,
	document.getElementById("root")
);
