import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { observer } from "mobx-react-lite";
import { Anchor } from "atomize";
import shopStore from "../../store/shop.store";
import "./Navbar.css";

const Navbar = observer(() => {
	const store = useContext(shopStore);

	return (
		<div className="topnav">
			<NavLink to="/">Home</NavLink>
			<NavLink to="/products">Products</NavLink>
			<NavLink to="/about">About</NavLink>
			<NavLink to="/contact">Contact</NavLink>
			<Anchor onClick={() => store.openCart()}>Cart</Anchor>
			<NavLink to="/login" style={{ float: "right" }}>
				Login
			</NavLink>
		</div>
	);
});

export default Navbar;
