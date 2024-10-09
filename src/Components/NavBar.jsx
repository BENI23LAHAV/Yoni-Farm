import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
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

        <Link to={"/galery"}>
          <li>גלרייה</li>
        </Link>
      </ul>
    </nav>
  );
};

export default NavBar;
