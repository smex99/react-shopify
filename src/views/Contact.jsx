import React, { useState } from "react";
import { Text, Div, Container, Button } from "atomize";

const Contact = () => {
	const [contact, setContact] = useState({
		fullName: "",
		email: "",
		subject: "",
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
					Contact Us
				</Text>
				<Text>Home-Contact Us</Text>
			</Div>
			<Container>
				<Div>
					<form className="contact-form" onSubmit={(e) => handleSubmit(e)}>
						<input
							name="fullName"
							type="text"
							placeholder="Enter your name"
							value={contact.fullName}
							onChange={(e) => handleOnChange(e)}
						/>
						<input
							name="email"
							type="email"
							placeholder="Enter email address"
							className="form.input"
							value={contact.email}
							onChange={(e) => handleOnChange(e)}
						/>
						<input
							name="subject"
							type="text"
							placeholder="Enter Subject"
							className="form.input"
							value={contact.subject}
							onChange={(e) => handleOnChange(e)}
						/>
						<textarea
							name="message"
							placeholder="Enter Message"
							className="form.input"
							value={contact.message}
							onChange={(e) => handleOnChange(e)}
						/>
						<Button
							bg="warning700"
							hoverBg="warning800"
							rounded="circle"
							p={{ r: "1.5rem", l: "1.5rem" }}
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
