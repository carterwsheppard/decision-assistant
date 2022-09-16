var rn = require('random-number');
var gen = rn.generator({
  min:  0
, max:  1
, integer: false
})


import React from "react";

//import Auth from "../../utils/auth";
//import { Link } from "react-router-dom";
//need to import queries once ready on back end

function RandomPortal() {
    const { data } = useQuery(QUERY_USER);
    let user;
  
    if (data) {
      user = data.user;
    }


        if (Auth.loggedIn()) {
            return (
            <div>
            <h2>
            Random Decision for {user.username}
            </h2>
            <p>
            //random result from query here using gen() function from npm package random-number 
            </p>
            </div>


            )
          } else {
            return (
                <div>
            Please Login
            </div>
            );
          }

}

export default RandomPortal;