import React, { useEffect, useContext } from "react";
import { observer } from "mobx-react-lite";
import shopStore from "../store/shop.store";
import { Container, Text } from "atomize";
import { useParams } from "react-router-dom";

const Product = observer(() => {
	const store = useContext(shopStore);
	let id = useParams();

	useEffect(() => {
		store.fetchProductWithId(id);
	}, [store, id]);

	return (
		<Container>
			{!store.product && <Text>Loading...</Text>}
			{/* <Text textSize="title">{store.product.title}</Text> */}
		</Container>
	);
});

export default Product;
