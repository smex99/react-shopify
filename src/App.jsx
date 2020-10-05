import React from "react";
import { observer } from "mobx-react-lite";
import shopStore from "./store/shop.store";

const App = observer((props) => {
	const store = React.useContext(shopStore);

	React.useEffect(() => {
		store.createCheckout();
	}, [store]);

	return <>{props.children}</>;
});

export default App;
