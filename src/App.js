import { useState, React } from "react";
import styled from "styled-components";
import Background from "./Components/Background";
import "./Styles/Background.css";
import About from "./Views/About";
import "./App.css";
import Profile from "./Views/Profile";
import MobileNav from "./Components/MobileNav";

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
	width: 60%;
	height: 90vh;
	border-radius: 15px;
	background-color: rgb(227, 250, 241);
	box-shadow: -9px 18px 5px 0px rgba(0, 0, 0, 0.38);
	overflow: auto;
	@media (max-width: 768px) {
		width: 100vw;
		height: 110vh;
		margin-top: -8px;
		border-radius: 0;
	}
`;

const Card2 = styled.div`
	position: relative;
	width: 80%;
	height: 90vh;
	border-radius: 10px;
	background-color: rgb(227, 250, 241);
	box-shadow: -9px 18px 5px 0px rgba(0, 0, 0, 0.38);
	overflow: auto;
	@media (max-width: 768px) {
		width: 100vw;
		height: 100vh;
		border-radius: 0;
	}
`;

const MobileApp = styled.div`
	@media (min-width: 768px) {
		display: none;
	}
`;

const FullScreenApp = styled.div`
	@media (max-width: 768px) {
		display: none;
	}
`;

const App = () => {
	const [content, setContent] = useState(<Profile />);
	const [content2, setContent2] = useState(<About />);

	return (
		<>
			<FullScreenApp>
				<AppContainer>
					<Container>
						<Background />
						<Card>
							<About />
						</Card>
						<Card2>{content}</Card2>
					</Container>
					<MobileNav setContent={setContent} />
				</AppContainer>
			</FullScreenApp>
			<MobileApp>
				<AppContainer>
					<Container>
						<Background />
						<Card>{content2}</Card>
					</Container>
					<MobileNav setContent={setContent2} />
				</AppContainer>
			</MobileApp>
		</>
	);
}

export default App;
