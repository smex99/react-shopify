import React, { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { observer } from "mobx-react-lite";
import { Container, Row, Col, Div, Text, Image, Button, Icon } from "atomize";
import shopStore from "../store/shop.store";

const Product = observer(() => {
	const store = useContext(shopStore);
	let { id } = useParams();

	useEffect(() => {
		store.fetchProductWithId(id);
		return () => {
			store.clearSeletedProduct();
		};
	}, [store, id]);

	return (
		<Container>
			{!store.product && <Text>Loading...</Text>}

			{store.product.images && (
				<Row>
					<Col>
						<Image alt="product-img" src={store.product.images[0].src} />

						<Div>
							<Row>
								{store.product.images.map((item) => {
									return (
										<Image
											key={item.src}
											w="80px"
											h="80px"
											m="8px"
											alt=""
											src={item.src}
										/>
									);
								})}
							</Row>
						</Div>
					</Col>
					<Col>
						<Div m="16px">
							<Text textSize="title">{store.product.title}</Text>
							<Text textSize="subheader">Description</Text>
							<Text textSize="paragraph">{store.product.description}</Text>
						</Div>

						<Button
							prefix={
								<Icon
									name="Add"
									size="16px"
									color="white"
									m={{ r: "0.5rem" }}
								/>
							}
							bg="warning700"
							hoverBg="warning800"
							rounded="circle"
							p={{ r: "1.5rem", l: "1rem" }}
							shadow="3"
							hoverShadow="4"
						>
							Add to Cart
						</Button>
					</Col>
				</Row>
			)}
		</Container>
	);
});

export default Product;
