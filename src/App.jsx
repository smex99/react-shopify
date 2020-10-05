import React from "react";
import { observer } from "mobx-react-lite";
import shopStore from "./store/shop.store";
import "./App.css";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";

const App = observer((props) => {
	const store = React.useContext(shopStore);

	React.useEffect(() => {
		store.createCheckout();
	}, [store]);

	return (
		<div className="App">
			<h2>Boutique en cours de construction ...</h2>
			{props.children}
		</div>
	);
});

export default App;
