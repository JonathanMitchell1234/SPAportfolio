import React from "react";
import styled from "styled-components";
import ReactHTMLtoPDFgen from "../Images/ReactHTMLtoPDFgen.png"
import hiring from "../Images/hiring.gif"
import Portfolio2022 from "../Images/Portfolio2022.gif"
import URLshortener from "../Images/URLshortener.png"
import ThriftingOnEastern from "../Images/ThriftingOnEastern.png"


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
				<p>Built with: JavaScript, React, MaterialUI, Emotion, Axios, Git</p>
				<a href="/path/to/demo">Demo</a>
				<a href="/path/to/github/repository">GitHub Repository</a>
			</PortfolioItem>
			<PortfolioItem>
				<img src={hiring} alt="Brighton Center Hiring Page" />
				<h3>Brighton Center Hiring Page</h3>
				<p>
					Hiring page built for Brighton Center, Inc. <br />
					Built with: HTML, CSS, SCSS, JavaScript, Git
				</p>
				<a href="https://www.brightoncenter.com/careers">Demo</a>
			</PortfolioItem>
			<PortfolioItem>
				<img src={Portfolio2022} alt="2022 Portfolio" />
				<h3>2022 Portfolio</h3>
				<CodeFactor>
					<a href="https://www.codefactor.io/repository/github/jonathanmitchell1234/space">
						<img src="https://www.codefactor.io/repository/github/jonathanmitchell1234/space/badge" alt="CodeFactor" />
					</a>
				</CodeFactor>
				<p>
					Portfolio for the year 2022 designed and coded by me <br />
					Built with: HTML, CSS, SCSS, JavaScript, Git
				</p>
				<a href="https://www.jonathanmitchell.xyz">Demo</a>
				<a href="https://github.com/JonathanMitchell1234/space">GitHub Repository</a>
			</PortfolioItem>
			<PortfolioItem>
				<img src={ThriftingOnEastern} alt="ThriftingOnEastern" />
				<h3>Thrifting on Eastern</h3>
				<CodeFactor>
					<a href="https://www.codefactor.io/repository/github/jonathanmitchell1234/thriftingoneastern">
						<img src="https://www.codefactor.io/repository/github/jonathanmitchell1234/thriftingoneastern/badge" alt="CodeFactor" />
					</a>
				</CodeFactor>
				<p>
					A mockup page for Brighton Center's enterprise, Thrifting on Eastern
					<br />
					Built with: JavaScript, React, SCSS, Bootstrap-React, Git
				</p>
				<a href="https://thrifting-on-eastern.vercel.app/">Demo</a>
				<a href="https://github.com/JonathanMitchell1234/ThriftingOnEastern/tree/main/src">GitHub Repository</a>
			</PortfolioItem>
			<PortfolioItem>
				<img src={URLshortener} alt="URL Shortener" />
				<h3>URL Shortener</h3>
				<CodeFactor>
					<a href="https://www.codefactor.io/repository/github/jonathanmitchell1234/reacturlshortener">
						<img src="https://www.codefactor.io/repository/github/jonathanmitchell1234/reacturlshortener/badge" alt="CodeFactor" />
					</a>
				</CodeFactor>
				<p>
					URL Shortener built with Shrtco API <br />
					Built with: JavaScript, React, CSS, Axios, Git
				</p>
				<a href="https://reacturlshortener.vercel.app/">Demo</a>
				<a href="https://github.com/JonathanMitchell1234/ReactURLshortener">GitHub Repository</a>
			</PortfolioItem>
		</PortfolioContainer>
	);
};

export default Portfolio;
