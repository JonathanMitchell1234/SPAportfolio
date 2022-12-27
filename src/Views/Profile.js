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

const Profile = () => {
	return (
		<>
			<AboutContainer>
				{/* <Name>Your Name</Name>
				<Role>Your Role</Role> */}
				<Map />
				<div>
					<Bio>
						Hi, I'm Jonathan Mitchell. I am a 32 year old Front-end Software/Web Developer from{" "}
						<RoughNotation type="underline" show={true} color={"red"} animationDelay={2000} animationDuration={4000} >
							Greater Cincinnati.
						</RoughNotation>{" "}
						I have a passion for creating visually appealing and user-friendly web applications. With a strong foundation in {" "}
                        <RoughNotation type="underline" show={true} color={"red"} animationDelay={4000} animationDuration={7000}>HTML, CSS,
						JavaScript and React
                        </RoughNotation>, I am skilled in building responsive and mobile-friendly websites that deliver an optimal user experience
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
