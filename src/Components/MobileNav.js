import React from "react";
import { Navbar } from "react-navbar-menu";

const MobileNav = () => {
	return (
		<div>
			<Navbar
				IconColor={"yellow"}
				MenuNumber={4}
				Position={"bottom"}
				url1={"#home"}
				icon1={"bx bx-home-alt"}
				Center={true}
				url2={"#aboutme"}
				icon2={"bx bx-book-alt"}
				url3={"/contact"}
				icon3={"bx bx-user"}
				url4={"#skills"}
				icon4={"bx bx-pin"}
				backgroundColor={"#151c28"}
				activeColor={"#a595e9"}
			/>
		</div>
	);
};

export default MobileNav;
