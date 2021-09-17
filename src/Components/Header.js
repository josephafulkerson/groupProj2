import React from "react";

function Header() {
    const headerName= "< House Teas Made Locally />"
    return (
        <>
            <div className="headNameLogo">
                <h1>{headerName}</h1>
                <img className="logo" src="https://i.imgur.com/sWjJlKc.png" />
            </div>
            <h2>Discover Your Delectable Cup</h2>
        </>
    )
}

export default Header;