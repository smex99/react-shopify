import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { observer } from "mobx-react-lite";
import { Anchor, Icon } from "atomize";
import shopStore from "../../store/shop.store";
import "./Navbar.css";

const Navbar = observer(() => {
	const store = useContext(shopStore);

	const [showMenu, setShowMenu] = useState(false);

	const handleResponsiveMenu = () => {
		setShowMenu(!showMenu);
	};

	return (
		<div className={showMenu ? "topnav" : "topnav responsive"}>
			<NavLink to="/">Home</NavLink>
			<NavLink to="/products">Shop</NavLink>
			<NavLink to="/about">About</NavLink>
			<NavLink to="/contact">Contact</NavLink>
			<Anchor onClick={() => store.openCart()}>Cart</Anchor>
			<Anchor className="icon" onClick={() => handleResponsiveMenu()}>
				<Icon name="Menu" size="17px" />
			</Anchor>
		</div>
	);
});

export default Navbar;
