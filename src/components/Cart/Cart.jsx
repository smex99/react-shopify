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
				<Row m={{ b: "1rem" }}>
					<Col>
						<Text textSize="subheader">Cart</Text>
					</Col>
					<Col size="1">
						<Icon
							cursor="pointer"
							onClick={() => store.closeCart()}
							name="Close"
							size="20px"
						/>
					</Col>
				</Row>
				{store.checkout.lineItems &&
					store.checkout.lineItems.map((item) => {
						return (
							<Row key={item.id}>
								<Col>
									<Image
										w="70px"
										h="70px"
										src={item.variant.image.src}
										alt="cart-img"
									/>
								</Col>
								<Col>
									<Text textSize="paragraph">{item.title}</Text>
									<Text>{item.quantity}</Text>
									<Text tag="strong">
										{item.variant.price} {store.checkout.currencyCode}
									</Text>
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
										<Icon name="DeleteSolid" size="15px" color="white" />
									</Button>
								</Col>
							</Row>
						);
					})}
				<Row m="4rem">
					<Col>
						<Text textSize="subheading">Total: </Text>
					</Col>
					<Col>
						<Text tag="strong">
							{store.checkout.totalPrice} {store.checkout.currencyCode}
						</Text>
					</Col>
				</Row>
				<Button
					prefix={
						<Icon name="Card" size="16px" color="white" m={{ r: "0.5rem" }} />
					}
					onClick={() => handleOpenCheckout(store.checkout.webUrl)}
				>
					Payer
				</Button>
			</Div>
		</SideDrawer>
	);
});

export default Cart;
