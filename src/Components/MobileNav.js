import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

export default function MobileNav() {
	// Declare and initialize the matches state variable
	const [matches, setMatches] = React.useState(false);

	React.useEffect(() => {
		// Update the value of the matches state variable based on the screen width
		const mediaQuery = window.matchMedia("(max-width: 768px)");
		setMatches(mediaQuery.matches);
	}, []);

	return (
		<Box sx={{ flexGrow: 1 }}>
			{/* Only render the navbar if the screen width is less than 768px */}
			{matches && (
				<AppBar position="static">
					<Toolbar>
						<IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
							<MenuIcon />
						</IconButton>
						<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
							News
						</Typography>
						<Button color="inherit">Login</Button>
					</Toolbar>
				</AppBar>
			)}
		</Box>
	);
}
