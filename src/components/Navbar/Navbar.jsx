import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
	return (
		<div className="topnav">
			<NavLink to="/">Home</NavLink>
			<NavLink to="/products">Products</NavLink>
			<NavLink to="/about">About</NavLink>
			<NavLink to="/contact">Contact</NavLink>
			<NavLink to="/login" style={{ float: "right" }}>
				Login
			</NavLink>
		</div>
	);
};

export default Navbar;
