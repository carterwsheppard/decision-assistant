import React from "react";
import photo123 from "../../images/logo.gif"
// import { capitalizeFirstLetter } from "../../utils/helpers";

function Nav() {

  const handleClick = () => {
    console.log("click handled")
  }

  return (
    <header data-testid="header" className="flex-row px-1">
      
        <a href="/" className="italic">
        <img className = {'img-thumbnail'} alt='Decision Assistant Logo' src = {photo123}/>
        </a>
     
      <nav>
        <ul className="flex-row">
          <li className={"mx-2"}>
            <span onClick={() => handleClick()}>
              <a href="/">Login / Sign Up</a>
            </span>
          </li>
          <li className={"mx-2"}>
            <span onClick={() => handleClick()}>
              <a href="add-option">Manage List</a>
            </span>
          </li>
          <li className={"mx-2"}>
            <span onClick={() => handleClick()}>
            <a href="decision-time">Decision Time</a>
            </span>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;