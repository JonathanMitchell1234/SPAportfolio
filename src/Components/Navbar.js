import React from "react";
import styled from "styled-components";
import EmojiPeopleSharpIcon from "@mui/icons-material/EmojiPeopleSharp";
import FolderSharpIcon from "@mui/icons-material/FolderSharp";
import AlternateEmailSharpIcon from "@mui/icons-material/AlternateEmailSharp";
import Profile from "../Views/Profile.js";
import Portfolio from "../Views/Portfolio.js"
import ContactForm from "../Views/Contact.js"


const Navs = styled.nav`
	display: flex;
	flex-direction: column;
	width: 8%;
	height: 100%;
	position: relative;
	margin-top: 30vh;
	font-family: "League Spartan", sans-serif;

	@media (max-width: 768px) {
		// flex-direction: row;
		// width: 100%;
		// margin-top: 0;
		// margin-bottom: 5px;
		// display: flex;
		// justify-content: center;
		// align-items: flex-end;
		// height: auto;
		// position: static;
		// z-index: 9999;
		display: none;
	}
`;

const Button = styled.button`
	width: 100%;
	background-color: transparent;
	color: #fff;
	padding: 0.5em 1em;
	border-radius: 4px;
	cursor: pointer;
	margin: -2px;
	border: 1px solid white;

	&:hover {
		background-color: rgb(55, 7, 122);
	}
`;

const Navbuttons = (props) => {
	const { setContent } = props; // destructure setContent function from props

	return (
		<Navs>
			<Button onClick={() => setContent(<Profile />)}>
				{" "}
				<EmojiPeopleSharpIcon /> <br /> About{" "}
			</Button>
			<Button onClick={() => setContent(<Portfolio />)}>
				{" "}
				<FolderSharpIcon /> <br /> Portfolio
			</Button>
			<Button onClick={() => setContent(<ContactForm />)}>
				{" "}
				<AlternateEmailSharpIcon /> <br /> Contact{" "}
			</Button>
		</Navs>
	);
}

export default Navbuttons;
