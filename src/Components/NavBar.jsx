import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="rubik-dirt-regular">
      <ul>
        <Link to={"/"}>
          <li>בית</li>
        </Link>
        <Link to={"/posts"}>
          <li>פוסטים</li>
        </Link>

        <Link to={"/info"}>
          <li>מי אנחנו</li>
        </Link>

        <Link to={"/gallery"}>
          <li>גלרייה</li>
        </Link>
      </ul>
    </nav>
  );
};

export default NavBar;
