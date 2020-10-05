import React, { useEffect } from "react";
import { observer } from "mobx-react-lite";
import shopStore from "../store/shop.store";
import { Div, Text, Image, Row, Col } from "atomize";

const Products = observer(() => {
	const store = React.useContext(shopStore);

	useEffect(() => {
		store.fetchAllProducts();
	}, [store]);

	// const handleClick = () => {};

	return (
		<>
			<Text tag="h2" textSize="heading">
				Page de produits
			</Text>

			<Div d="flex">
				<Row>
					{store.products.length === 0 ? (
						<Text textSize="paragraph">Loading...</Text>
					) : (
						store.products.map((item, i) => {
							return (
								<Col size="3" key={item.id}>
									<Div w="270px" p="1rem" shadow="5" rounded="lg">
										<Text textSize="title">{item.title}</Text>
										<Image alt="product-img" src={item.images[i].src} />
										<Text textSize="paragraph">{item.handle}</Text>
									</Div>
								</Col>
							);
						})
					)}
				</Row>
			</Div>
		</>
	);
});

export default Products;
