import React, { useState } from "react";
import styled from "styled-components";
import Background from "./Components/Background";
import "./Styles/Background.css"
import About from "./Views/About"
import "./App.css"
import ContactForm from "./Views/Contact.js"
import Portfolio from "./Views/Portfolio";
import Profile from "./Views/Profile";


const Container = styled.div`
	display: flex;
	flex-direction: row;
	height: 75%;
	margin: auto;
	width: 90%;
`;

const Navbar = styled.nav`
	display: flex;
	flex-direction: column;
	width: 20%;
	height: 100%;
	position: relative;
  margin-top: 30vh;
`;

const Button = styled.button`
	background-color: transparent;
	color: #fff;
	padding: 0.5em 1em;
	border: none;
	border-radius: 3px;
	cursor: pointer;
	margin: 0;
	border: 2px solid white;
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
	box-shadow: -9px 18px 5px 0px rgba(0,0,0,0.38);
  overflow: auto;


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
		<Container>
			<Background />
			<Navbar>
				<Button onClick={() => setContent()}>About Me</Button>
				<Button onClick={() => setContent(<Portfolio />)}>Portfolio</Button>
				<Button onClick={() => setContent(<ContactForm />)}>Contact</Button>
			</Navbar>
			<Card>
				<About />
			</Card>
			<Card>{content}</Card>
		</Container>
	);
}

export default App;
