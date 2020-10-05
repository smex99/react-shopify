import React, { useEffect } from "react";
import { observer } from "mobx-react-lite";
import shopStore from "../store/shop.store";

import { Card } from "primereact/card";
import { Button } from "primereact/button";

const Products = observer(() => {
	const store = React.useContext(shopStore);

	useEffect(() => {
		store.fetchAllProducts();
	}, [store]);

	return (
		<div className="p-d-flex">
			{store.products.length === 0 ? (
				<p>Loading...</p>
			) : (
				store.products.map((item, i) => {
					return (
						<Card
							key={item.id}
							title={item.title}
							style={{ width: "20rem", marginBottom: "2em" }}
							className="ui-card-shadow p-mr-2"
							header={<img alt="product-img" src={item.images[i].src} />}
						>
							<p className="p-m-0" style={{ lineHeight: "1.5" }}>
								{item.handle}
							</p>
						</Card>
					);
				})
			)}
		</div>
	);
});

export default Products;
