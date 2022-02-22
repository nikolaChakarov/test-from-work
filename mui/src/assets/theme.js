import { createTheme } from "@mui/material";
import { purple, orange, red } from "@mui/material/colors";

const primaryColor = purple[600];
const secondaryColor = orange[500];
const dangerColor = red[900];

const customTheme = createTheme({
	palette: {
		primary: {
			main: primaryColor,
		},
		secondary: {
			main: secondaryColor,
		},
		error: {
			main: dangerColor,
		},
	},
	components: {
		// Name of the component
		MuiFab: {
			styleOverrides: {
				// Name of the slot
				secondary: {
					// Some CSS
					"&:hover": {
						color: "white",
					},
				},
			},
		},
	},
});

export default customTheme;
