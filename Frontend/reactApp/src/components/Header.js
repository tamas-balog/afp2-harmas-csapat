import React from "react";
import logo from './images/pizza-logo.jpg';

function Header() {
    // Import result is the URL of your image
    return <img src={logo} alt="Logo" style={{width: 300, display: "block", marginLeft: "auto", marginRight: "auto"}}  />;
}
export default Header;