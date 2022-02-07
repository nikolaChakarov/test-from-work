import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
	Grid,
	Paper,
	Typography,
	Box,
	Rating,
	createTheme,
	ThemeProvider,
} from "@mui/material";
import { AccessTime } from "@mui/icons-material";

const appCustomTheme = createTheme({
	components: {
		MuiTypography: {
			variants: [
				{
					props: {
						variant: "body2",
					},
					style: {
						fontSize: 11,
					},
				},
				{
					props: {
						variant: "body3",
					},
					style: {
						fontSize: 9,
					},
				},
			],
		},
	},
});

const TourCard = ({
	image,
	name,
	duration,
	numberOfReviews,
	price,
	id,
	collection,
}) => {
	const navigate = useNavigate();
	const [ratingValue, setRatingValue] = useState(2.5);

	const onTourClick = () => {
		navigate(`/${id}`, { state: { collection } });
	};

	return (
		<Grid item xs={3} onClick={onTourClick}>
			<ThemeProvider theme={appCustomTheme}>
				<Paper elevation={2} square>
					<img src={image} alt="" className="img" />
					<Box paddingX={1}>
						<Typography variant="subtitle1" component="h2">
							{name}
						</Typography>

						<Box
							sx={{
								display: "flex",
								alignItems: "center",
							}}
							marginBottom={3}
						>
							<AccessTime
								sx={{
									width: 12.5,
									marginRight: 0.5,
								}}
							/>
							<Typography variant="body2" component="p">
								{duration} hours
							</Typography>
						</Box>

						<Box
							sx={{
								display: "flex",
								alignItems: "center",
								marginBottom: 1,
							}}
						>
							<Rating
								value={ratingValue}
								onChange={(e, newValue) => setRatingValue(newValue)}
								precision={0.5}
								size="small"
								sx={{
									marginRight: 0.5,
								}}
							/>
							<Typography variant="body2" component={"p"} marginRight={1}>
								{ratingValue}
							</Typography>

							<Typography variant="body3" component={"p"}>
								({numberOfReviews} reviews)
							</Typography>
						</Box>
						<Box>
							<Typography variant="h6" component={"h3"}>
								From C ${price}
							</Typography>
						</Box>
					</Box>
				</Paper>
			</ThemeProvider>
		</Grid>
	);
};

export default TourCard;
