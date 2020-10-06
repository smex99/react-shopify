import React, { useEffect } from "react";
import { observer } from "mobx-react-lite";
import shopStore from "../store/shop.store";
import { Div, Text, Image, Row, Col, Container } from "atomize";
import { Link } from "react-router-dom";

const Products = observer(() => {
	const store = React.useContext(shopStore);

	useEffect(() => {
		store.fetchAllProducts();
	}, [store]);

	return (
		<Container>
			<Text tag="h2" textSize="heading">
				Product Collection
			</Text>

			<Div d="flex">
				<Row>
					{store.products.length === 0 ? (
						<Text textSize="paragraph">Loading...</Text>
					) : (
						store.products.map((item, i) => {
							return (
								<Col key={item.id} size="3">
									<Div
										w="270px"
										h="420px"
										p="1rem"
										shadow="5"
										rounded="lg"
										m="1rem"
									>
										<Image alt="product-img" src={item.images[0].src} />
										<Link to={`/product/${item.id}`}>
											<Text textSize="subheader">{item.title}</Text>
										</Link>
										<Text textSize="paragraph" textAlign="justify">
											{item.handle}
										</Text>
										<Text>{item.variants[0].price} MAD</Text>
									</Div>
								</Col>
							);
						})
					)}
				</Row>
			</Div>
		</Container>
	);
});

export default Products;
