import { useState } from "react";
import styled from "styled-components";
import Background from "./Components/Background";
import "./Styles/Background.css";
import About from "./Views/About";
import "./App.css";
import Profile from "./Views/Profile";
import Navbuttons from "./Components/Navbar";  // import Navbar component

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
		<>
			<AppContainer>
				<Container>
					<Background />
					<Navbuttons setContent={setContent} />
					<Card>
						<About />
					</Card>
					<Card2>{content}</Card2>
				</Container>
			</AppContainer>
		</>
	);
}

export default App;

