import React from "react";
import { NavLink } from "react-router-dom";

function NavBar({ onChangePage, countCartItems }) {
    return (
        <nav className="navBar">
            <NavLink className="homeNav" exact to="/">Home</NavLink>
            <NavLink className="storyNav" to="/our-story">Our Story</NavLink>
            <NavLink className="cartNav" to="/shopping-cart">
                Shopping Cart { ' ' } 
                {countCartItems ? (
                    <button>{countCartItems}</button>
                ): ""}
            </NavLink>
        </nav>
    )
}

export default NavBar;