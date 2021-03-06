import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider as StyletronProvider, DebugEngine } from "styletron-react";
import { Client as Styletron } from "styletron-engine-atomic";

// Page components
import App from "./App";
import Home from "./views/Home";
import Products from "./views/Products";
import Product from "./views/Product";
import About from "./views/About";
import Contact from "./views/Contact";

// Global components
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Cart from "./components/Cart/Cart";

import "./index.css";
import * as serviceWorker from "./serviceWorker";
import "mobx-react-lite/batchingForReactDom";

const debug =
	process.env.NODE_ENV === "production" ? void 0 : new DebugEngine();

// 1. Create a client engine instance
const engine = new Styletron();

ReactDOM.render(
	<StyletronProvider value={engine} debug={debug} debugAfterHydration>
		<App>
			<Router>
				<Navbar />
				<Cart />
				<Switch>
					<Route path="/" exact>
						<Home />
					</Route>
					<Route path="/products" exact>
						<Products />
					</Route>
					<Route path="/product/:id" exact>
						<Product />
					</Route>
					<Route path="/about" exact>
						<About />
					</Route>
					<Route path="/contact" exact>
						<Contact />
					</Route>
				</Switch>
				<Footer />
			</Router>
		</App>
	</StyletronProvider>,

	document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
