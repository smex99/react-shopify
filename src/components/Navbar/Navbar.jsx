import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
	return (
		<div className="topnav">
			<NavLink to="/">Acceuil</NavLink>
			<NavLink to="/products">Produits</NavLink>
			<NavLink to="/about">A Propos</NavLink>
			<NavLink to="/contact">Contact</NavLink>
		</div>
	);
};

export default Navbar;
