import React from "react";
import { Container, Grid, Typography } from "@mui/material";

import cities from "../data.json";
import TourCard from "../components/TourCard";

const Home = () => {
	return (
		<div className="home">
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
									<TourCard key={idx} {...tour} collection={city.name} />
								))}
							</Grid>
						</React.Fragment>
					);
				})}
			</Container>
		</div>
	);
};

export default Home;
