import { useState } from "react";
import { Link } from "react-router-dom";

import {
	Box,
	AppBar,
	Toolbar,
	IconButton,
	Typography,
	Menu,
	MenuItem,
	Button,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const Navigation = () => {
	const pages = ["Home", "Test"];
	const settings = ["Profile", "Account", "Dashboard", "Logout"];

	const [anchorElNav, setAnchorElNav] = useState(null);

	const handleOpenNavMenu = (e) => {
		setAnchorElNav(e.currentTarget);
	};

	const handleCloseNavMenu = () => {
		setAnchorElNav(null);
	};

	return (
		<div className="app">
			<Box>
				<AppBar position="static">
					<Toolbar>
						<Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
							<IconButton
								size="large"
								aria-label="account of current user"
								aria-controls="menu-appbar"
								aria-haspopup="true"
								onClick={handleOpenNavMenu}
								color="inherit"
							>
								<MenuIcon />
							</IconButton>

							<Menu
								id="menu-appbar"
								anchorEl={anchorElNav}
								anchorOrigin={{
									vertical: "bottom",
									horizontal: "left",
								}}
								keepMounted
								transformOrigin={{
									vertical: "top",
									horizontal: "left",
								}}
								open={Boolean(anchorElNav)}
								onClose={handleCloseNavMenu}
								sx={{
									display: { xs: "block", md: "none" },
								}}
							>
								{pages.map((page) => (
									<MenuItem key={page} onClick={handleCloseNavMenu}>
										<Typography textAlign="center">{page}</Typography>
									</MenuItem>
								))}
							</Menu>
						</Box>

						<Typography
							component="div"
							sx={{ display: { xs: "none", md: "flex" } }}
						>
							LOGO
						</Typography>

						<Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
							{pages.map((page) => (
								<Button
									key={page}
									onClick={handleCloseNavMenu}
									sx={{ my: 2, color: "white", display: "block" }}
									component={Link}
									to={`/${page}`}
								>
									{page}
								</Button>
							))}
						</Box>
					</Toolbar>
				</AppBar>
			</Box>
		</div>
	);
};

export default Navigation;
