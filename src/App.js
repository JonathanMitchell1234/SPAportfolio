import { useState } from "react";
import styled from "styled-components";
import Background from "./Components/Background";
import "./Styles/Background.css";
import About from "./Views/About";
import "./App.css";
import ContactForm from "./Views/Contact.js";
import Portfolio from "./Views/Portfolio";
import Profile from "./Views/Profile";
import EmojiPeopleSharpIcon from "@mui/icons-material/EmojiPeopleSharp";
import FolderSharpIcon from "@mui/icons-material/FolderSharp";
import AlternateEmailSharpIcon from "@mui/icons-material/AlternateEmailSharp";


const AppContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const Container = styled.div`
	display: flex;
	flex-direction: row;
	margin: auto;
	width: 90%;
	max-width: 1200px;
	
  
  @media (max-width: 768px) {
		width: 100%;
		margin-top: 0;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
`;

const Navbar = styled.nav`
	display: flex;
	flex-direction: column;
	width: 8%;
	height: 100%;
	position: relative;
	margin-top: 30vh;

	@media (max-width: 768px) {
		width: 100%;
		margin-top: 0; 
    margin-bottom: 5px;
	}
`;

const Button = styled.button`
	background-color: transparent;
	color: #fff;
	padding: 0.5em 1em;
	border-radius: 4px;
	cursor: pointer;
	margin: -2px;
	border: 1px solid white;
	font-family: "Roboto Slab", serif;

	&:hover {
		background-color: black;
	}
`;

const Card = styled.div`
	position: relative;
	width: 80%;
	height: 90vh;
	border-radius: 4px;
	background-color: rgb(227, 250, 241);
	box-shadow: -9px 18px 5px 0px rgba(0, 0, 0, 0.38);
	overflow: auto;

	@media (max-width: 768px) {
		width: 100%;
		height: auto;
	}

	&:before {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		box-shadow: 10px 10px 15px rgba(0, 0, 0, 0.05);
		border-radius: 4px;
	}

	&:after {
		position: absolute;
		left: -15px;
		top: -15px;
		width: 100%;
		height: 100%;
		border-radius: 4px;
	}
`;

const Card2 = styled.div`
	position: relative;
	width: 80%;
	height: 90vh;
	border-radius: 4px;
	background-color: rgb(227, 250, 241);
	box-shadow: -9px 18px 5px 0px rgba(0, 0, 0, 0.38);
	overflow: auto;

	@media (max-width: 768px) {
		width: 100%;
		height: auto;
	}

	&:before {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		box-shadow: 10px 10px 15px rgba(0, 0, 0, 0.05);
		border-radius: 4px;
	}

	&:after {
		position: absolute;
		left: -15px;
		top: -15px;
		width: 100%;
		height: 100%;
		border-radius: 4px;
	}



`;


function App() {
	const [content, setContent] = useState(<Profile />);

	return (
		<AppContainer>
			<Container>
				<Background />
				<Navbar>
					<Button onClick={() => setContent()}> <EmojiPeopleSharpIcon /> <br /> About </Button>
					<Button onClick={() => setContent(<Portfolio />)}> <FolderSharpIcon /> <br /> Portfolio</Button>
					<Button onClick={() => setContent(<ContactForm />)}> <AlternateEmailSharpIcon /> <br /> Contact </Button>
				</Navbar>
				<Card>
					<About />
				</Card>
				<Card2>
          {content}
          
        </Card2>
			</Container>
		</AppContainer>
	);
}

export default App;