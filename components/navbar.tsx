import React from "react";
import Button from "./button";
import ClockMechanism from "./clock";
const Navbar = () => {
  return (
    <nav className="nav-footer text-[0.7vw]" >
      <span>(ANGEL/STUDIO)®</span>
      <span>
        <div>Located in Poland</div>
        <div >North Dakota</div>

      </span>
      <span><div>(Warsaw, Ochota)</div>
     
      </span>
      <span>
      <ClockMechanism/>
      <div >@Andrew_Nicko</div></span>
      <Button text="BOOK AN EXPIRIENCE" image="/images/LINEUP.svg"></Button>

    </nav>
  );
};

export default Navbar;
