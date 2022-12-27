import React from "react";
import styled from "styled-components";
import Map from "../Components/GoogleMap";


const AboutContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 1em;
`;

const ProfileImage = styled.img`
	width: 200px;
	height: 200px;
	border-radius: 50%;
	margin-bottom: 1em;
`;

const Name = styled.h1`
	font-size: 2em;
	font-weight: bold;
	margin-bottom: 0.5em;
`;

const Role = styled.h2`
	font-size: 1.5em;
	font-weight: lighter;
	color: #777;
	margin-bottom: 1em;
`;

const Bio = styled.p`
	font-size: 1em;
	line-height: 1.5;
	text-align: center;
	max-width: 800px;
`;

const Profile = () => {
	return (
		<>
			<AboutContainer>
				{/* <Name>Your Name</Name>
				<Role>Your Role</Role> */}
				<Map />
				<Bio>
					Hi, I'm Jonathan Mitchell. I am a 32 year old Front-end Software/Web Developer. I have a passion for creating visually appealing
					and user-friendly web applications. With a strong foundation in HTML, CSS, and JavaScript, I am skilled in building responsive and
					mobile-friendly websites that deliver an optimal user experience across all devices. In addition to my technical skills, I am a
					problem-solver at heart and thrive in collaborative environments. Whether working on a solo project or as part of a team, I am
					dedicated to delivering high-quality code that meets the needs of my clients and users. I am constantly learning and staying
					up-to-date on the latest web development trends and technologies. I am excited to bring my skills and dedication to a company
					where I can make a meaningful impact and continue to grow as a developer.
				</Bio>
			</AboutContainer>
		</>
	);
};

export default Profile;
