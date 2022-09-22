import React from "react";
import photo from "../../images/decision_maker.png";
import { QUERY_DECISIONS } from "../../utils/queries";
import { useQuery } from "@apollo/client"
//import Auth from "../../utils/auth";
//import { Link } from "react-router-dom";
//need to import queries once ready on back end

var rn = require('random-number');

function RandomPortal() {
  //need to replace with API route and then a random item from the returned array using rand number above
     
  const { loading, data } = useQuery(QUERY_DECISIONS)
  const decisions = data?.decisions || []
  console.log(decisions)

  var gen = rn.generator({
    min:  0, 
    max: decisions.length, 
    integer: true
  })
  
  if(!loading) {
    console.log(decisions.length, gen)
  }

  function getListDesc(item) {
    return <span className = {'modalContainer'}>{item.decisionText}</span>
  }

  return (
    <div>
      <div className = {'modalContainer'}>
        <img className = {'img-thumbnail'} alt=' A hand writing DECISION MAKER in all caps and underlining it using an expo marker' src = {photo}/>
      </div>
      <h4 className = {'modalContainer'}>
      Random Decision for {loading ? (
        <div>Loading...</div>
      ) : ( 
        decisions[0].username 
      )}
      </h4>
      <p className = {'modalContainer'}>
        {loading ? (
          <span>Loading...</span>
        ) : (
          getListDesc(decisions[gen()])
        )}
      </p> 
      <div className = {'modalContainer'}>
        <button onClick={() => window.location.reload(false)}>Give Another Option</button>
      </div>
    </div>
  )
}

export default RandomPortal;