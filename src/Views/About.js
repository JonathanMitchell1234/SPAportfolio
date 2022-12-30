import React from "react";
import styled from "styled-components";
import profilephoto from "../profilephoto.jpeg";
import { RoughNotation } from "react-rough-notation";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

const Image = styled.img`
	width: 100%;
	height: auto;
	clip-path: polygon(100% 0%, 100% 64%, 49% 100%, 23% 81%, 0 64%, 0 0);
`;

const Socials = styled.div`
	display: flex;
	flex-direction: row;

	> div {
		display: flex;
		flex-direction: row;
		padding-top: 15px;
		padding-bottom: 15px;
		
	}

	svg {
		margin-right: 1.5em;

		@media (max-width: 768px) {
			margin-right: 0;
			margin-left: 0.5em
		}
	}

	@media (max-width: 768px) {
		justify-content: center;
	}
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

const AboutContainer = styled.div`

@media (max-width: 768px) {
        text-align: center;

}
`;

const About = () => {
    
	return (
		<>
			<AboutContainer>
				<Image src={profilephoto} alt="Jonathan Mitchell" />
				<div>
					<RoughNotation type="highlight" show={true} color={"rgb(222, 235, 52)"} animationDelay={300} animationDuration={2000}>
						<h1>Jonathan Mitchell</h1>
					</RoughNotation>
					<div>
						<h2>
							<RoughNotation type="underline" show={true} color={"red"} animationDelay={2000} animationDuration={2000}>
								Software Developer
							</RoughNotation>
						</h2>
					</div>
					<Socials>
						<div>
							<LinkedInIcon />
							<GitHubIcon />
							<FacebookIcon />
							<InstagramIcon />
						</div>
					</Socials>
					<Button>Resume</Button>
					<Button>Contact Me</Button>
				</div>
			</AboutContainer>
		</>
	);
};

export default About;
