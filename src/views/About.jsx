import React from "react";
import { Text, Div, Container } from "atomize";

const About = () => {
	return (
		<Container>
			<Div>
				<Text tag="h2" textSize="title">
					Why Shopify Store ?
				</Text>
				<Text textSize="paragraph">
					Shopify Store is a new way of shopping, one that gives you the same
					advantages that brands have had for years, connecting you to high
					quality manufacturers and letting you shop at factory prices.{" "}
				</Text>
			</Div>
		</Container>
	);
};

export default About;
