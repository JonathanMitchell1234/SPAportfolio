import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import profilephoto from "../profilephoto.jpeg";
import { RoughNotation } from "react-rough-notation";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import "../App.css";

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
			margin-left: 0.5em;
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
	font-family: "League Spartan", sans-serif;

	&:hover {
		background-color: rgb(55, 7, 122);
		color: white;
		
	}
`;

const AboutContainer = styled.div`
	height: 100%;
	@media (max-width: 768px) {
		text-align: center;
		position: relative;
	}
`;

const Arrow = styled.div`
	@media (min-width: 750px) {
		display: none;
	}
	@media (max-width: 375px) {
		display: none;
	}
`;

const arrowContainerStyles = {
	position: "absolute",
	bottom: "150px",
	left: "0",
	right: "0",
	marginLeft: "auto",
	marginRight: "auto",
	
};

const NameStyles = styled.div`
	color: rgb(226, 250, 240);
	@media (max-width: 375px) {
		padding-bottom: 0.5em;
	}
`;


const About = () => {
	const elementRef = useRef(null);

	useEffect(() => {
		setTimeout(() => {
			elementRef.current.style.display = "none";
		}, 5000);
	}, []);
	
	
  
	
	return (
		<>
			<AboutContainer>
				<Image src={profilephoto} alt="Jonathan Mitchell" />
				<div>
					<RoughNotation type="highlight" show={true} color={"rgb(55, 7, 122)"} animationDelay={100} animationDuration={3000}>
						<NameStyles>
							<h1>Jonathan Mitchell</h1>
						</NameStyles>
					</RoughNotation>
					<div>
						<h2>
							<RoughNotation type="underline" show={true} color={"rgb(5,83,74)"} animationDelay={2000} animationDuration={2000}>
								Software Developer
							</RoughNotation>
						</h2>
					</div>
					<Socials>
						<div>
							<a href="https://www.linkedin.com/in/jonathan-mitchell-81b6bb21a/" title="LinkedIn" style={{ color: "black" }}>
								<LinkedInIcon  />
							</a>
							<a href="https://github.com/jonathanmitchell1234" title="GitHub" style={{ color: "black" }}>
								<GitHubIcon />
							</a>
							<a href="https://www.facebook.com/jonathan.c.mitchell.5" title="Facebook" style={{ color: "black" }}>
								<FacebookIcon />
							</a>
							<a href="https://www.instagram.com/j0nathanmitchell/" title="Instagram" style={{ color: "black" }}>
								<InstagramIcon />
							</a>
						</div>
					</Socials>

					<a href="https://drive.google.com/file/d/1WM76xR67-vyxMvu0vLGXUL4Pb71zU6gi/view?usp=sharing">
						<Button>Resume</Button>
					</a>
					<Button onClick={() => (window.location.href = "mailto:jonmitchell1234@gmail.com")}>Contact Me</Button>
					<div style={arrowContainerStyles}>
						<Arrow>
							<KeyboardDoubleArrowDownIcon className="bouncingarrow" style={{ fontSize: "3em" }} ref={elementRef} />
						</Arrow>
					</div>
				</div>
			</AboutContainer>
		</>
	);
};

export default About;
