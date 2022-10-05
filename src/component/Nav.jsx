import React from "react";
import icon from "../icon.png";
function Nav() {
  return (
    <nav className="nav">
      <div className="nav__container">
        <img src={icon} alt="" />
        <p className="nav__text">My Travel Journal</p>
      </div>
    </nav>
  );
}

export default Nav;
