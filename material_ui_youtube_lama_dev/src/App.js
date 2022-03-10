import { styled } from "@mui/system";
import "./App.scss";
import { Button, Typography } from "@mui/material";
import MouseIcon from "@mui/icons-material/Mouse";

const Bttn = styled(Button)(({ theme }) => ({
	backgroundColor: theme.palette.primary.main,
	color: "#fff",
	"&:hover": {
		backgroundColor: theme.palette.secondary.main,
	},
}));

const MyBttnDesktop = styled(Button)(({ theme }) => ({
	...theme.myBttn,
	display: "none",
	[theme.breakpoints.up("sm")]: {
		display: "inline-block",
	},
}));

const MyBttnMobile = styled(Button)(({ theme }) => ({
	...theme.myBttn,
	display: "inline-block",
	[theme.breakpoints.up("sm")]: {
		display: "none",
	},
}));

const App = () => {
	return (
		<div id="main-app">
			{/* <Typography>Hello World!</Typography>
			<Button
				variant="outlined"
				startIcon={<MouseIcon />}
				sx={{
					backgroundColor: "yellow",
					"&:hover": { backgroundColor: "#1976d2", color: "#fff" },
				}}
			>
				Click
			</Button>
			<Bttn>Test</Bttn>
			<MyBttnDesktop>Desktop VS</MyBttnDesktop>
			<MyBttnMobile>Mobile VS</MyBttnMobile> */}
		</div>
	);
};

export default App;
