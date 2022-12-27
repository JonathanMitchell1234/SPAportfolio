import React from "react";
import styled from "styled-components";
import GoogleMaps from "../Components/GoogleMap";


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
				<Name>Your Name</Name>
				<Role>Your Role</Role>
				<Bio>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
					enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
				</Bio>
			</AboutContainer>
		</>
	);
};

export default Profile;
