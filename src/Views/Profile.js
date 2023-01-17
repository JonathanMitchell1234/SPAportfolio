import React from "react";
import styled from "styled-components";
import Map from "../Components/GoogleMap";
import { RoughNotation } from "react-rough-notation";


const AboutContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 1em;
`;

const Bio = styled.p`
	font-size: 1em;
	line-height: 1.5;
	text-align: center;
	max-width: 800px;
`;

const Header = styled.h3`
	background-color: rgb(55, 7, 122);
	color: #fff;
	padding: 0.5em 1em;
	border: none;
	border-radius: 3px;
	cursor: pointer;
	margin: 0;
	@media (max-width: 768px) {
		border-radius: 0;
	}
`;

const Profile = () => {
	return (
		<>
			<Header>
				<h3>About Me</h3>
			</Header>
			<AboutContainer>
				<Map />
				<div>
					<Bio>
						Hi, I'm Jonathan Mitchell. I am a 32 year old Front-end Software/Web Developer from <br />
						<RoughNotation type="underline" show={true} color={"rgb(5,83,74)"} animationDelay={4000} animationDuration={4000}>
							Greater Cincinnati.
						</RoughNotation>{" "}
						I have a passion for creating visually appealing and user-friendly web applications. With a strong foundation in HTML, CSS,
						JavaScript and React, I am skilled in building responsive and mobile-friendly websites that deliver an optimal user experience
						across all devices. In addition to my technical skills, I am a problem-solver at heart and thrive in collaborative
						environments. Whether working on a solo project or as part of a team, I am dedicated to delivering high-quality code that
						meets the needs of my clients and users. I am constantly learning and staying up-to-date on the latest web development trends
						and technologies. I am excited to bring my skills and dedication to a company where I can make a meaningful impact and
						continue to grow as a developer.
					</Bio>
				</div>
			</AboutContainer>
		</>
	);
};

export default Profile;
