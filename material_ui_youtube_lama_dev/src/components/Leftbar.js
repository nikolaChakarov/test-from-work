import React from "react";
import { Container, Box, Typography } from "@mui/material";
import { Home } from "@mui/icons-material";

const Leftbar = () => {
	return (
		<Container
			sx={{
				color: "#555 ",
				height: "100vh",
				paddingTop: 10,
				borderRight: "1px groove #dedede",
			}}
		>
			<Box
				sx={{
					display: "flex",
					alignItems: "center",
					marginBottom: {
						xs: 1,
						md: 3,
					},
					cursor: "pointer",
				}}
			>
				<Home
					sx={{
						fontSize: "18px",
						marginRight: 1,
					}}
				/>
				<Typography
					sx={{
						display: {
							sm: "block",
							xs: "none",
						},
						fontWeight: 500,
					}}
				>
					Home page
				</Typography>
			</Box>

			<Box
				sx={{
					display: "flex",
					alignItems: "center",
					marginBottom: {
						xs: 1,
						md: 3,
					},
					cursor: "pointer",
				}}
			>
				<Home
					sx={{
						fontSize: "18px",
						marginRight: 1,
					}}
				/>
				<Typography
					sx={{
						display: {
							sm: "block",
							xs: "none",
						},
						fontWeight: 500,
					}}
				>
					About page
				</Typography>
			</Box>
		</Container>
	);
};

export default Leftbar;
