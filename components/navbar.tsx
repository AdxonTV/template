import React from "react";
import Button from "./button";
const Navbar = () => {
  return (
    <nav className="nav-footer" >
      <span>(ANGEL/STUDIO)®</span>
      <span>
        <div>Located in Poland</div>
        <div >North Dakota</div>
      </span>
      <span>(Warsaw, Ochota)</span>
      <span>UCT : 12:45:03</span>
      <Button text="BOOK AN EXPIRIENCE" image="/images/LINEUP.svg"></Button>

    </nav>
  );
};

export default Navbar;
