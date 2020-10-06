import React, { useContext } from "react";
import { observer } from "mobx-react-lite";
import { Div, SideDrawer, Text, Row, Col, Image, Button, Icon } from "atomize";
import shopStore from "../../store/shop.store";

const Cart = observer(() => {
	const store = useContext(shopStore);

	const handleOpenCheckout = (webUrl) => {
		window.open(webUrl, "_blank");
	};

	return (
		<SideDrawer isOpen={store.isCartOpen} onClose={() => store.closeCart()}>
			<Div d="flex" flexDir="column" m={{ b: "4rem" }}>
				<Text textSize="title">Your cart</Text>
				{store.checkout.lineItems &&
					store.checkout.lineItems.map((item) => {
						return (
							<Row key={item.id}>
								<Col>
									<Image
										w="80px"
										h="80px"
										src={item.variant.image.src}
										alt="cart-img"
									/>
								</Col>
								<Col>
									<Text textSize="paragraph">{item.variant.title}</Text>
									<Text>{item.variant.quantity}</Text>
									<Text>{item.variant.price}</Text>
								</Col>
								<Col size="2">
									<Button
										h="2.5rem"
										w="2.5rem"
										bg="danger700"
										hoverBg="danger600"
										rounded="circle"
										m={{ r: "1rem" }}
										shadow="2"
										hoverShadow="4"
										onClick={() => store.removeItemFromCart(item.id)}
									>
										<Icon name="DeleteSolid" size="20px" color="white" />
									</Button>
								</Col>
							</Row>
						);
					})}
				<Button onClick={() => handleOpenCheckout(store.checkout.webUrl)}>
					Checkout
				</Button>
			</Div>
		</SideDrawer>
	);
});

export default Cart;
