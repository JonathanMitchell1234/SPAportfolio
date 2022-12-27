import React from "react";
import styled from "styled-components";

const FormContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
    margin-top: 20%;
   
`;

const Form = styled.form`
	display: flex;
	flex-direction: column;
	width: 80%;
`;

const Input = styled.input`
	margin: 0.5em 0;
	padding: 0.5em;
	border: 1px solid #ccc;
	border-radius: 3px;
`;

const TextArea = styled.textarea`
	margin: 0.5em 0;
	padding: 0.5em;
	border: 1px solid #ccc;
	border-radius: 3px;
	resize: none;
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
	margin: 0.5em 0;
`;


const ContactForm = () => {
	return (
		<>
			<div>
				<Header>
					<h3>Leave a Message</h3>
				</Header>
			</div>
			<FormContainer>
				<Form>
					<Input type="text" placeholder="Name" />
					<Input type="email" placeholder="Email" />
					<Input type="text" placeholder="Subject" />
					<TextArea rows={5} placeholder="Message" />
					<Button type="submit">Send</Button>
				</Form>
			</FormContainer>
		</>
	);
};

export default ContactForm;
