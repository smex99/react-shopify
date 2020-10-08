import React from "react";
import { Container, Row, Col, Div, Text, Button } from "atomize";

const Home = () => {
	return (
		<>
			<Row h="32rem">
				<Col bg="info800" size="5"></Col>
				<Col bg="info200" size="7">
					<Div w="38rem" m="1rem">
						<Text textSize="heading" textWeight="600">
							Shop is fun
						</Text>
						<Text textSize="display1" textWeight="900">
							BROWSE OUR PREMIUM PRODUCT
						</Text>
						<Text textSize="paragraph" textAlign="justify" textWeight="600">
							Us which over of signs divide dominion deep fill bring they're
							meat beho upon own earth without morning over third. Their male
							dry. They are great appear whose land fly grass.
						</Text>
						<Button
							bg="info800"
							rounded="circle"
							p={{ r: "1.5rem", l: "1rem" }}
							shadow="3"
							hoverShadow="4"
						>
							Browse Now
						</Button>
					</Div>
				</Col>
			</Row>

			<Container>
				<Text tag="h2" textSize="Title" textWeight="900">
					Trending Product
				</Text>
			</Container>

			<Row h="20rem">
				<Col bg="info300">
					<Div textAlign="center">
						<Text tag="h2" textSize="Title" textWeight="900">
							Winter Sales 50% Off
						</Text>
					</Div>
				</Col>
			</Row>
		</>
	);
};

export default Home;
