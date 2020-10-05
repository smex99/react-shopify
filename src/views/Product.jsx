import React, { useEffect, useContext } from "react";
import { observer } from "mobx-react-lite";
import shopStore from "../store/shop.store";
import { Text } from "atomize";

const Product = observer(() => {
	const store = useContext(shopStore);

	useEffect(() => {
		// Get current product id
		store.fetchProductWithId();
	}, [store]);

	return (
		<div>
			<Text textSize="display1"></Text>
		</div>
	);
});

export default Product;
