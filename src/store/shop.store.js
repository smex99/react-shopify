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
	selectedImage = "";
	checkout = {};
	isCartOpen = false;

	// store actions
	async createCheckout() {
		const checkout = await client.checkout.create();
		localStorage.setItem("checkout", checkout.id);
		this.checkout = checkout;
	}

	async fetchCheckout(checkoutId) {
		const checkout = await client.checkout.fetch(checkoutId);
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

	async removeItemFromCart(id) {
		const lineItemsToRemove = [id];

		const checkout = await client.checkout.removeLineItems(
			this.checkout.id,
			lineItemsToRemove
		);

		this.checkout = checkout;
	}

	async fetchAllProducts() {
		const products = await client.product.fetchAll();
		this.products = products;
	}

	async fetchProductWithId(id) {
		const product = await client.product.fetch(id);
		this.product = product;
		this.selectedImage = product.images[0].src;
	}

	clearSeletedProduct() {
		this.product = {};
	}

	setProductSelectedImage(imgUrl) {
		this.selectedImage = imgUrl;
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
	selectedImage: observable,
	createCheckout: action,
	fetchCheckout: action,
	addItemToCart: action,
	removeItemFromCart: action,
	fetchAllProducts: action,
	fetchProductWithId: action,
	clearSeletedProduct: action,
	setProductSelectedImage: action,
	openCart: action,
	closeCart: action,
});

export default createContext(new ShopStore());
