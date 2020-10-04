import React, { useEffect } from "react";
import { observer } from "mobx-react-lite";
import shopStore from "../store/shop.store";

const Products = observer(() => {
	const store = React.useContext(shopStore);

	useEffect(() => {
		store.fetchAllProducts();
	}, [store]);

	return (
		<div>
			<h3>Products Page</h3>
			{store.products.length === 0 ? (
				<p>Loading...</p>
			) : (
				store.products.map((item, i) => {
					return (
						<div className="product-card" key={item.id}>
							<h4 className="product-title">{item.title}</h4>
							<img
								src={store.products[i].images[i].src}
								className="product-img"
								alt="product-img"
							/>
						</div>
					);
				})
			)}
		</div>
	);
});

export default Products;
