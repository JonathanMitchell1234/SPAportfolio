import React from "react";
import styled from "styled-components";
import ReactHTMLtoPDFgen from "../Images/ReactHTMLtoPDFgen.png"

const PortfolioContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	margin: 2em 0;
`;

const PortfolioItem = styled.div`
	width: 100%;
	margin-bottom: 2em;

	img {
		width: 100%;
	}

	h3 {
		font-size: 1.5em;
		margin: 0.5em 0;
	}

	p {
		font-size: 0.9em;
		color: #666;
	}

	a {
		display: block;
		margin-top: 1em;
		font-size: 0.9em;
		color: #0070f3;
		text-decoration: none;

		&:hover {
			text-decoration: underline;
		}
	}
`;

const CodeFactor = styled.a`

width:80px;
height: auto;



`;


const Portfolio = () => {
	return (
		<PortfolioContainer>
			<PortfolioItem>
				<img src={ReactHTMLtoPDFgen} alt="HTMLtoPDFgen" />
				<h3>HTML to PDF Generator </h3>
				<CodeFactor>
					<a href="https://www.codefactor.io/repository/github/jonathanmitchell1234/reacthtmltopdfgenerator">
						<img src="https://www.codefactor.io/repository/github/jonathanmitchell1234/reacthtmltopdfgenerator/badge" alt="CodeFactor" />
					</a>
				</CodeFactor>
				<p>Built with: React, MaterialUI, Axios, Git</p>
				<a href="/path/to/demo">Demo</a>
				<a href="/path/to/github/repository">GitHub Repository</a>
			</PortfolioItem>
			<PortfolioItem>
				<img src={ReactHTMLtoPDFgen} alt="HTMLtoPDFgen" />
				<h3>Project name</h3>
				<p>Brief description of the project</p>
				<a href="/path/to/demo">Demo</a>
				<a href="/path/to/github/repository">GitHub Repository</a>
			</PortfolioItem>
			<PortfolioItem>
				<img src={ReactHTMLtoPDFgen} alt="HTMLtoPDFgen" />
				<h3>Project name</h3>
				<p>Brief description of the project</p>
				<a href="/path/to/demo">Demo</a>
				<a href="/path/to/github/repository">GitHub Repository</a>
			</PortfolioItem>
			<PortfolioItem>
				<img src={ReactHTMLtoPDFgen} alt="HTMLtoPDFgen" />
				<h3>Project name</h3>
				<p>Brief description of the project</p>
				<a href="/path/to/demo">Demo</a>
				<a href="/path/to/github/repository">GitHub Repository</a>
			</PortfolioItem>
		</PortfolioContainer>
	);
};

export default Portfolio;
