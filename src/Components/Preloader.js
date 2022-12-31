import { CirclesWithBar } from "react-loader-spinner";
import styled from "styled-components";
import { useEffect } from "react"
import { useState } from "react"
import App from "../App.js"



const PreloaderContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 100%;
    text-align: center;
    
`;

function Preloader() {
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		// Fetch data or perform other async tasks here
		setTimeout(() => {
			setLoading(false);
		}, 2000);
	}, []);

	return loading ? (
		<PreloaderContainer>
			<CirclesWithBar
				height="100"
				width="100"
				color="white"
				wrapperStyle={{}}
				wrapperClass=""
				visible={true}
				outerCircleColor="yellow"
				innerCircleColor="purple"
				barColor=""
				ariaLabel="circles-with-bar-loading"
			/>
		</PreloaderContainer>
	) : (
		<App />
	);
}

export default Preloader;
