import React from "react";
import { observer } from "mobx-react-lite";
import shopStore from "./store/shop.store";
import "./App.css";
import { Container } from "atomize";

const App = observer((props) => {
	const store = React.useContext(shopStore);

	React.useEffect(() => {
		store.createCheckout();
	}, [store]);

	return <Container>{props.children}</Container>;
});

export default App;
