import React from "react";
import styled from "styled-components";
import { useState } from "react";


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
`;




const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send the email using the fetch function
    fetch("https://2023portfoliojonathanmitchell.vercel.app/API/send-email", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			name: name,
			email: email,
			subject: subject,
			message: message,
		}),
	})
		.then((res) => res.text())
		.then((text) => console.log(text));
  };

    return (
    <>
      <div>
        <Header>
          <h3>Leave a Message</h3>
        </Header>
      </div>
      <FormContainer>
        <Form onSubmit={handleSubmit}>
          <Input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
          <Input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <Input type="text" placeholder="Subject" value={subject} onChange={(e) => setSubject(e.target.value)} />
          <TextArea rows={5} placeholder="Message" value={message} onChange={(e) => setMessage(e.target.value)} />
          <Button type="submit">Send</Button>
        </Form>
      </FormContainer>
    </>
  );
};

export default ContactForm;
