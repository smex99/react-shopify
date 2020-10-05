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

import Navbar from "./components/Navbar/Navbar";
import { Container } from "atomize";
import "./index.css";
import * as serviceWorker from "./serviceWorker";

const debug =
	process.env.NODE_ENV === "production" ? void 0 : new DebugEngine();

// 1. Create a client engine instance
const engine = new Styletron();

ReactDOM.render(
	<React.StrictMode>
		<StyletronProvider value={engine} debug={debug} debugAfterHydration>
			<App>
				<Router>
					<Navbar />
					<Container>
						<Switch>
							<Route path="/" exact>
								<Home />
							</Route>
							<Route path="/products">
								<Products />
							</Route>
							<Route path="/product/:id">
								<Product />
							</Route>
							<Route path="/about">
								<About />
							</Route>
							<Route path="/contact">
								<Contact />
							</Route>
						</Switch>
					</Container>
				</Router>
			</App>
		</StyletronProvider>
	</React.StrictMode>,
	document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
