import { createContext } from "react";
import { action, decorate, observable } from "mobx";
import Client from "shopify-buy";

// Read about shopify storefront API
const client = Client.buildClient({
	domain: "react-shop-test.myshopify.com",
	storefrontAccessToken: "d9fddac3baf444d6b35cb93e53a88712",
});

class ShopStore {
	products = [];
	product = {};
	checkout = {};
	isCartOpen = false;

	// store actions
	async createCheckout() {
		const checkout = await client.checkout.create();
		this.checkout = checkout;
	}

	async addItemToCart(variantId, quantity) {
		const lineItemsToAdd = [
			{
				variantId,
				quantity: parseInt(quantity, 10),
			},
		];

		const checkout = await client.checkout.addLineItems(
			this.checkout.id,
			lineItemsToAdd
		);

		this.checkout = checkout;
	}

	async removeItemFromCart() {}

	async fetchAllProducts() {
		const products = await client.product.fetchAll();
		console.log(products);
		this.products = products;
	}

	async fetchProductWithId(id) {
		const product = await client.product.fetch(id);
		this.product = product;
	}

	openCart() {
		this.isCartOpen = true;
	}

	closeCart() {
		this.isCartOpen = false;
	}
}

decorate(ShopStore, {
	products: observable,
	product: observable,
	checkout: observable,
	isCartOpen: observable,
	createCheckout: action,
	addItemToCart: action,
	removeItemFromCart: action,
	fetchAllProducts: action,
	fetchProductWithId: action,
	openCart: action,
	closeCart: action,
});

export default createContext(new ShopStore());
