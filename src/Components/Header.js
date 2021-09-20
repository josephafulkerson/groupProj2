import React from "react";

function Header() {
    const headerName= "< House Teas Made Locally />"
    return (
        <>
            <div className="headNameLogo">
                <h1>{headerName}</h1>
            </div>
            <h2>Discover Your Delectable Cup</h2>
        </>
    )
}

export default Header;