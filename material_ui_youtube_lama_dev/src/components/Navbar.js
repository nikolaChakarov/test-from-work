import React, { useState } from "react";
import { styled, alpha } from "@mui/system";
import {
	AppBar,
	Toolbar,
	Typography,
	Box,
	InputBase,
	Badge,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { Mail, Notifications, Cancel } from "@mui/icons-material";

const LogoDesktop = styled(Typography)(({ theme }) => ({
	display: "block",
	[theme.breakpoints.down("md")]: {
		display: "none",
	},
}));

const LogoMobile = styled(Typography)(({ theme }) => ({
	display: "none",
	[theme.breakpoints.down("md")]: {
		display: "block",
	},
}));

const Search = styled("div")((props) => {
	console.log(props);

	return {
		position: "relative",
		display: "flex",
		alignItems: "center",
		borderRadius: props.theme.shape.borderRadius,
		backgroundColor: alpha(props.theme.palette.common.white, 0.15),
		"&:hover": {
			backgroundColor: alpha(props.theme.palette.common.white, 0.25),
		},
		marginRight: props.theme.spacing(2),
		marginLeft: 0,
		width: "50%",
		[props.theme.breakpoints.down("sm")]: {
			// marginLeft: theme.spacing(3),
			display: props.click ? "flex" : "none",
		},
	};
});

const SearchBttn = styled("div")(({ theme, click }) => ({
	display: click ? "none" : "flex",
	alignItems: "center",
	marginLeft: "auto",
	marginRight: theme.spacing(1),
	[theme.breakpoints.up("sm")]: {
		display: "none",
	},
}));

const CancelBttn = styled("div")(({ theme }) => ({
	[theme.breakpoints.up("sm")]: {
		display: "none",
	},
}));

const Navbar = () => {
	const [click, setClick] = useState(false);
	return (
		<AppBar position="fixed">
			<Toolbar
				sx={{
					display: "flex",
					justifyContent: "space-between",
				}}
			>
				<LogoDesktop>Logo Desktop</LogoDesktop>
				<LogoMobile>Logo Mobile</LogoMobile>

				<Search click={+click}>
					<SearchIcon />
					<InputBase
						placeholder="Search..."
						sx={{
							color: "#fff",
							marginLeft: "8px",
						}}
					/>
					<CancelBttn>
						<Cancel onClick={() => setClick(false)} />
					</CancelBttn>
				</Search>

				<SearchBttn onClick={() => setClick(!click)} click={+click}>
					<SearchIcon />
				</SearchBttn>

				<Box
					sx={{
						display: click ? "none" : "block",
					}}
				>
					<Badge badgeContent={4} color="secondary" sx={{ marginRight: "8px" }}>
						<Mail />
					</Badge>
					<Badge badgeContent={4} color="secondary">
						<Notifications />
					</Badge>
				</Box>
			</Toolbar>
		</AppBar>
	);
};

export default Navbar;
