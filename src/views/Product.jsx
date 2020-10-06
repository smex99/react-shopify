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

	const handleClickProductImg = (imgUrl) => {
		store.setProductSelectedImage(imgUrl);
	};

	const handleAddItemToCart = (variantId, quantity) => {
		store.addItemToCart(variantId, quantity);
		store.openCart();
	};

	return (
		<Container>
			{!store.product && <Icon name="Loading3" size="20px" />}

			{store.product.images && (
				<Row>
					<Col>
						{/* <Image alt="product-img" src={store.product.images[0].src} /> */}
						<Image
							h="600px"
							w="600px"
							alt="product-img"
							src={store.selectedImage}
						/>
						<Div>
							<Row>
								{store.product.images.map((item) => {
									return (
										<Image
											cursor="pointer"
											onClick={(e) => handleClickProductImg(item.src)}
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
							onClick={() =>
								handleAddItemToCart(store.product.variants[0].id, 1)
							}
						>
							Ajouter au panier
						</Button>
					</Col>
				</Row>
			)}
		</Container>
	);
});

export default Product;
