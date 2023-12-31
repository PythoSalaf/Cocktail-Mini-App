import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="header_container">
      <div className="header_content">
        <Link to="/" className="logo">
          Cocktail App
        </Link>
        <Link to="/" className="link-home">
          Home
        </Link>
      </div>
    </div>
  );
};

export default Header;
