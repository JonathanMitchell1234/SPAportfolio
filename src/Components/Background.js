import React from "react"
import "../Styles/Background.css"


const Background = () => {
	const elements = [];
	for (let i = 0; i < 16; i++) {
		elements.push(React.createElement("li", { key: i }));
	}
	return React.createElement("ul", { className: "background" }, elements);
};



export default Background;