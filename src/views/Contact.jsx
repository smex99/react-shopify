import React, { useState } from "react";
import { Text, Div, Container, Input, Textarea, Button } from "atomize";

const Contact = () => {
	const [contact, setContact] = useState({
		fullName: "",
		email: "",
		message: "",
	});

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log("Contact form submitted !", contact);
	};

	const handleOnChange = (e) => {
		e.preventDefault();
		setContact({ ...contact, [e.target.name]: e.target.value });
	};

	return (
		<>
			<Div bg="info300" h="20rem" textAlign="center">
				<Text tag="h3" textSize="display1" textWeight="900">
					Contact Page
				</Text>
				<Text>Home Contact Us</Text>
			</Div>
			<Container>
				<Div>
					<form onSubmit={(e) => handleSubmit(e)}>
						<Input
							name="fullName"
							placeholder="Full Name"
							m="8px"
							value={contact.fullName}
							onChange={(e) => handleOnChange(e)}
						/>
						<Input
							name="email"
							placeholder="Email Adress"
							m="8px"
							value={contact.email}
							onChange={(e) => handleOnChange(e)}
						/>
						<Textarea
							name="message"
							placeholder="Message"
							m="8px"
							value={contact.message}
							onChange={(e) => handleOnChange(e)}
						/>
						<Button
							bg="warning700"
							hoverBg="warning800"
							rounded="circle"
							p={{ r: "1.5rem", l: "1rem" }}
							shadow="3"
							hoverShadow="4"
						>
							Envoyer votre message
						</Button>
					</form>
				</Div>
			</Container>
		</>
	);
};

export default Contact;
