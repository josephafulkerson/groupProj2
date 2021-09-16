import React from "react";
import { NavLink } from "react-router-dom";

function NavBar({ onChangePage, countCartItems }) {
    return (
        <nav>
            <NavLink exact to="/">Home</NavLink>
            <NavLink to="/our-story">Our Story</NavLink>
            <NavLink to="/shopping-cart">
                Shopping Cart { ' ' } 
                {countCartItems ? (
                    <button>{countCartItems}</button>
                ): ""}
            </NavLink>
        </nav>
    )
}

export default NavBar;