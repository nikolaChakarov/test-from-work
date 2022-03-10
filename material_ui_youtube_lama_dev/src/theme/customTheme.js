import { createTheme } from "@mui/material/styles";

const customTheme = createTheme({
	// palette: {
	// 	primary: {
	// 		main: "#850000",
	// 	},
	// },
	typography: {
		fontFamily: "Quicksand, sans-serif",
	},
	myBttn: {
		backgroundColor: "#850000",
		color: "#fff",
		"&:hover": {
			backgroundColor: "#333",
		},
	},
});

export default customTheme;
