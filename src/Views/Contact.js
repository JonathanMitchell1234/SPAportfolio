import React, {useState} from "react";
import styled from "styled-components";


const FormContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
    margin-top: 15%;
   
`;

const Form = styled.form`
	display: flex;
	flex-direction: column;
	width: 80%;
    required: true;
`;

const Input = styled.input`
	margin: 0.5em 0;
	padding: 0.5em;
	border: 1px solid #ccc;
	border-radius: 3px;
    required: true;
`;

const TextArea = styled.textarea`
	margin: 0.5em 0;
	padding: 0.5em;
	border: 1px solid #ccc;
	border-radius: 3px;
	resize: none;
    required: true;
`;

const Button = styled.button`
	background-color: rgb(55, 7, 122);
	color: #fff;
	padding: 0.5em 1em;
	border: none;
	border-radius: 3px;
	cursor: pointer;
	margin: 0.5em 0;
`;

const Header = styled.h3`
	background-color: rgb(55, 7, 122);
	color: #fff;
	padding: 0.5em 1em;
	border: none;
	border-radius: 3px;
	cursor: pointer;
	margin: 0;
	@media (max-width: 768px) {
		border-radius: 0;
	}
`;




const ContactForm = () => {
	const [status, setStatus] = useState("");

	const handleSubmit = async (e) => {
		e.preventDefault();
		// get the input fields
		const form = e.target;
		const data = new FormData(form);
		const xhr = new XMLHttpRequest();
		xhr.open(form.method, form.action);
		xhr.setRequestHeader("Accept", "application/json");
		xhr.onreadystatechange = () => {
			if (xhr.readyState !== XMLHttpRequest.DONE) return;
			if (xhr.status === 200) {
				form.reset();
				setStatus("SUCCESS");
			} else {
				setStatus("ERROR");
			}
		};
		xhr.send(data);
	};

	return (
		<>
			<div>
				<Header>
					<h3>Leave a Message</h3>
				</Header>
			</div>
			<FormContainer>
				<Form onSubmit={handleSubmit} action="https://formspree.io/mknaneyv" method="POST">
					<Input type="text" name="Name" placeholder="Name" required />
					<Input type="email" name="Email" placeholder="Email" required />
					<Input type="text" name="Subject" placeholder="Subject" required />
					<TextArea rows={10} name="Message" placeholder="Message" required />
					<Button type="submit">Send</Button>
					{status === "SUCCESS" && <p style={{ color: "rgb(55, 7, 122)" }}>Thanks! Your message has been sent.</p>}
					{status === "ERROR" && <p style={{ color: "red" }}>Ooops! There was an error, please try again.</p>}
				</Form>
			</FormContainer>
		</>
	);
};

export default ContactForm;
