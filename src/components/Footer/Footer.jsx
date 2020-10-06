import React from "react";
import { Row, Col, Div, Text } from "atomize";

const Footer = () => {
	return (
		<Div justify="center" h="12rem" bg="gray200">
			<Row m="8px">
				<Col>
					<Text textSize="paragraph">This is the Footer</Text>
				</Col>
			</Row>
		</Div>
	);
};

export default Footer;
