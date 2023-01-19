import React, { useState, useEffect } from "react";
import styled from "styled-components";
import EmojiPeopleSharpIcon from "@mui/icons-material/EmojiPeopleSharp";
import FolderSharpIcon from "@mui/icons-material/FolderSharp";
import AlternateEmailSharpIcon from "@mui/icons-material/AlternateEmailSharp";
import Profile from "../Views/Profile";
import ContactForm from "../Views/Contact";
import Portfolio from "../Views/Portfolio"
import HomeIcon from "@mui/icons-material/Home";
import About from "../Views/About"

const NavbarContainer = styled.div`
	background-color: #37077a;
	position: relative;
	width: 40vw;
	max-width: 500px;
	height: 100%;
	margin-top: 40px;
	border-radius: 10px;
	@media (max-width: 768px) {
		width: 100vw;
		border-radius: 0px;
		
	}
`;

const Navbar = styled.div`
	display: flex;
	align-items: center;
	height: 40px;
	
`;

const NavbarIcon = styled.div`
	flex: 1;
	text-align: center;
	cursor: pointer;
	color: #5c5a5a;
	&.active {
		color: white;
		font-weight: bold;
	}
`;




const MobileNav = (props) => {
	const [activeIndex, setActiveIndex] = useState(0);
	const { setContent } = props;
	const [isMobile, setIsMobile] = useState(false);
	useEffect(() => {
		setIsMobile(window.innerWidth < 768);
		window.addEventListener("resize", () => {
			setIsMobile(window.innerWidth < 768);
		});
	}, []);
	
	

	return (
		<>
			<div style={{ position: "fixed", bottom: "0" }}>
				<NavbarContainer>
					<Navbar>
						<NavbarIcon
							style={{ display: isMobile ? "block" : "none" }}
							className={activeIndex === 0 ? "active" : ""}
							onClick={() => {
								setActiveIndex(0);
								setContent(<About />);
							}}
						>
							<HomeIcon />
						</NavbarIcon>

						<NavbarIcon
							className={activeIndex === 1 ? "active" : ""}
							onClick={() => {
								setActiveIndex(1);
								setContent(<Profile />);
							}}
						>
							<EmojiPeopleSharpIcon />
						</NavbarIcon>
						<NavbarIcon
							className={activeIndex === 2 ? "active" : ""}
							onClick={() => {
								setActiveIndex(2);
								setContent(<Portfolio />);
							}}
						>
							<FolderSharpIcon />
						</NavbarIcon>
						<NavbarIcon
							className={activeIndex === 3 ? "active" : ""}
							onClick={() => {
								setActiveIndex(3);
								setContent(<ContactForm />);
							}}
						>
							<AlternateEmailSharpIcon />
						</NavbarIcon>
					</Navbar>
					{/* <Highlight offset={activeIndex * 100} width={100 / 4} /> */}
				</NavbarContainer>
			</div>
		</>
	);
}

export default MobileNav;
