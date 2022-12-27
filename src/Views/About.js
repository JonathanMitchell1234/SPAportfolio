import React from "react";
import styled from "styled-components";
import profilephoto from "../profilephoto.jpeg";
import { RoughNotation } from "react-rough-notation";

const Image = styled.img`
	width: 100%;
	height: auto;
	clip-path: polygon(100% 0%, 100% 64%, 49% 100%, 23% 81%, 0 64%, 0 0);
`;

const Button = styled.button`
	background-color: transparent;
	color: black;
	width: 175px;
	padding: 0.5em 1em;
	border-radius: 3px;
	cursor: pointer;
	margin: 0.5em 0;
	border: 2px solid black;
	font-family: "Roboto Slab", serif;

	&:hover {
		background-color: black;
	}
`;
const About = () => {
    
	return (
		<>
		<Image src={profilephoto} alt="Jonathan Mitchell" />
			<div>
				<RoughNotation type="highlight" show={true} color={"rgb(27, 203, 8)"} animationDuration={2000}>
					<h1>Jonathan Mitchell</h1>
				</RoughNotation>
				<div>
					<h2>
						<RoughNotation type="underline" show={true} color={"rgb(27, 203, 8)"} animationDelay={2000} animationDuration={2000}>
							Software Developer
						</RoughNotation>
					</h2>
				</div>
				<div></div>
				<Button>Resume</Button>
				<Button>Contact Me</Button>
			</div>
		</>
	);
};

export default About;
