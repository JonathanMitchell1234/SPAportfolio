import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

export default function ButtonAppBar() {
	const [isMenuOpen, setIsMenuOpen] = React.useState(false);
	const [anchorEl, setAnchorEl] = React.useState(null); // added state variables for dropdown menu

	const handleMenuClick = (event) => {
		setIsMenuOpen(!isMenuOpen);
		setAnchorEl(event.currentTarget); // update anchor element
	};

	const handleMenuClose = () => {
		setIsMenuOpen(false);
		setAnchorEl(null); // clear anchor element
	};

	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position="static">
				<Toolbar>
					<IconButton
						size="large"
						edge="start"
						color="inherit"
						aria-label="menu"
						sx={{ mr: 2 }}
						onClick={handleMenuClick} // added click handler
					>
						<MenuIcon />
					</IconButton>
					<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
						News
					</Typography>
					
				</Toolbar>
			</AppBar>
			<Menu
				anchorEl={anchorEl}
				keepMounted
				open={isMenuOpen} // added open prop
				onClose={handleMenuClose} // added close handler
			>
				<MenuItem onClick={handleMenuClose}>Profile</MenuItem>
				<MenuItem onClick={handleMenuClose}>My account</MenuItem>
				<MenuItem onClick={handleMenuClose}>Logout</MenuItem>
			</Menu>
		</Box>
	);
}
