import React from "react";
// import { capitalizeFirstLetter } from "../../utils/helpers";

function Nav() {

  const handleClick = () => {
    console.log("click handled")
  }

  return (
    <header data-testid="header" className="flex-row px-1">
      <h2>
        <a href="/" className="italic">
          Decision Assistant 
        </a>
      </h2>
      <nav>
        <ul className="flex-row">
          <li className={"mx-2"}>
            <span onClick={() => handleClick()}>
              Login / Sign Up
            </span>
          </li>
          <li className={"mx-2"}>
            <span onClick={() => handleClick()}>
              My Lists
            </span>
          </li>
          <li className={"mx-2"}>
            <span onClick={() => handleClick()}>
            Decision Assistant
            </span>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;