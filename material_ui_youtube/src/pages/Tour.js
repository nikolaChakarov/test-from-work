import React, { useEffect, useState } from "react";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import {
	Container,
	Typography,
	Button,
	Box,
	Paper,
	BottomNavigation,
} from "@mui/material";

import cities from "../data.json";

import ImageCollage from "../components/ImageCollage";
import CustomizedAccordion from "../components/Accordion";
import BasicModal from "../components/Modal";

const Tour = () => {
	const navigate = useNavigate();

	let params = useParams();
	let location = useLocation();

	const [tour, setTour] = useState({});

	useEffect(() => {
		setTour((prev) => {
			const collectionName = location.state.collection;
			let currentCollection = cities.find((el) => el.name == collectionName);
			let currentCity = currentCollection.tours.find(
				(el) => el.id == params.id
			);

			return { ...currentCity };
		});
	}, []);

	console.log(tour);

	return (
		<>
			<Box>
				<Button variant="text" onClick={() => navigate("/")}>
					Back
				</Button>
			</Box>

			<Container
				className="test"
				sx={{
					width: 900,
				}}
			>
				<Typography variant="h3" component="h1">
					Explore the World in Vegas
				</Typography>

				<Box marginTop={3} sx={{ display: "flex" }}>
					<img
						src="https://images.unsplash.com/photo-1574734801038-4e01bed07e96?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fG5pYWdhcmElMjBmYWxsc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
						alt=""
						height={325}
					/>
					<ImageCollage />
				</Box>
				<Box marginBottom={10}>
					<Typography variant="h6" component="h4" marginTop={3}>
						About this ticket
					</Typography>
					<Typography
						variant="paragraph"
						component="p"
						marginTop={3}
						marginBottom={2}
					>
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores a
						explicabo quis, adipisci temporibus asperiores, dolorum magnam
						molestias soluta repudiandae ipsum aspernatur, porro architecto
						alias? Quasi ullam nesciunt blanditiis reiciendis.
					</Typography>
					<Typography variant="h6" component="h4" marginTop={3}>
						Frequently Asked Question
					</Typography>
					<CustomizedAccordion />
				</Box>

				<Paper
					sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
					elevation={3}
				>
					<BottomNavigation>
						<BasicModal />
					</BottomNavigation>
				</Paper>
			</Container>
		</>
	);
};

export default Tour;
