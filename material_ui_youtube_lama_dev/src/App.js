import "./App.scss";
import { Grid, Box } from "@mui/material";

import Navbar from "./components/Navbar";
import Leftbar from "./components/Leftbar";
import Rightbar from "./components/Rightbar";
import Feet from "./components/Feet";

const App = () => {
	return (
		<Box>
			<Navbar />
			<Grid container>
				<Grid item sm={2} xs={2}>
					<Leftbar />
				</Grid>
				<Grid item sm={7} xs={10}>
					<Feet />
				</Grid>
				<Grid
					item
					sm={3}
					sx={{
						display: {
							xs: "none",
						},
					}}
				>
					<Rightbar />
				</Grid>
			</Grid>
		</Box>
	);
};

export default App;
