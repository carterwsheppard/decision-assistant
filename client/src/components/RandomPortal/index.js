import React from "react";
import photo from "../../images/decision_maker.png";
//import Auth from "../../utils/auth";
//import { Link } from "react-router-dom";
//need to import queries once ready on back end

var rn = require('random-number');

function RandomPortal() {
    //need to replace with API route and then a random item from the returned array using rand number above
     
    const randomOption = [{
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

      var gen = rn.generator({
        min:  0
      , max:  randomOption.length
      , integer: true
      })

            return (
            <div>
                <div className = {'modalContainer'}>
                <img className = {'img-thumbnail'} alt=' A hand writing DECISION MAKER in all caps and underlining it using an expo marker' src = {photo}/>
                </div>
            <h4 className = {'modalContainer'}>
            Random Decision for {randomOption[0].username}
            </h4>
            <p className = {'modalContainer'}>
            {randomOption[gen()].decisionText}
            </p>
            <div className = {'modalContainer'}>
            <button onClick={() => window.location.reload(false)}>Give Another Option</button>
            </div>
            </div>
            )
          }

export default RandomPortal;