import React from "react";
import "./App.scss";
import { Container, Grid, Typography } from "@mui/material";

import cities from "./data.json";

import SearchAppBar from "./components/SearchAppBar";
import TourCard from "./components/TourCard";

const App = () => {
	return (
		<div className="app">
			<SearchAppBar />
			<Container>
				{cities.map((city, i) => {
					return (
						<React.Fragment key={i}>
							<Typography
								key={i}
								variant="h4"
								component="h2"
								marginTop={5}
								marginBottom={3}
							>
								Top {city.name} Tours
							</Typography>
							<Grid container spacing={5}>
								{city.tours.map((tour, idx) => (
									<TourCard key={idx} {...tour} />
								))}
							</Grid>
						</React.Fragment>
					);
				})}
			</Container>
		</div>
	);
};

export default App;
