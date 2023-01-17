import { Triangle } from "react-loader-spinner";
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

const LoaderBackground = styled.div`
	background: rgb(11, 134, 119);
	background: radial-gradient(circle, rgba(11, 134, 119, 1) 0%, rgba(55, 7, 122, 1) 50%, rgba(11, 134, 119, 1) 100%);
	height: 100%;
	width: 100%;
	position: fixed;
	top: 0;
	left: 0;
`;

function Preloader() {
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		// Fetch data or perform other async tasks here
		setTimeout(() => {
			setLoading(false);
		}, 1000);
	}, []);

	return loading ? (
		<LoaderBackground>
			<PreloaderContainer>
				<Triangle 
				height="100" 
				width="100" 
				color="white" 
				ariaLabel="triangle-loading" 
				wrapperStyle={{}} 
				wrapperClassName="" 
				visible={true} />
			</PreloaderContainer>
		</LoaderBackground>
	) : (
		<App />
	);
}

export default Preloader;
