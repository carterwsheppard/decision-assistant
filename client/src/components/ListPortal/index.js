import React from "react";
//import Auth from "../../utils/auth";
//import { Link } from "react-router-dom";
//need to import queries once ready on back end

function ListPortal() {
    //need to replace with API route and then a random item from the returned array using rand number above
    const Options = [{
      username: "testUser",
        decisionText:
          "Watch football all day"},
          {username: "testUser",
          decisionText:
            "Do HW all day"},
            {username: "testUser",
            decisionText:
              "Work all day"}
    ];

    function getListDesc(item) {
      return <p className = {'modalContainer'}>{item.decisionText}</p>
    }

            return (
            <div>
                <div className = {'modalContainer'}>
                
                </div>
            <h4 className = {'modalContainer'}>
           List of Options for {Options[0].username}
            </h4>
            {Options.map(getListDesc)}
            <div className = {'modalContainer'}>
            <button onClick={() => window.location.reload(false)}>Reset List Options</button>
            </div>
            </div>
            )
          }

export default ListPortal;