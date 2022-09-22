import React from "react";
import photo from "../../images/decision_maker.png";
import { QUERY_DECISIONS, QUERY_ME } from "../../utils/queries";
import { useQuery } from "@apollo/client"
import Auth from '../../utils/auth'
//import Auth from "../../utils/auth";
//import { Link } from "react-router-dom";
//need to import queries once ready on back end

var rn = require('random-number');

function RandomPortal() {
  const { loading: userLoading, data: userData} = useQuery(QUERY_ME)
  if(!userLoading) {
    console.log(userData)
  }
  const username = userData?.me.username
     
  const { loading, data } = useQuery(QUERY_DECISIONS, {
    variables: { username: username }
  })
  const decisions = data?.decisions || []
  console.log(decisions)

  var gen = rn.generator({
    min:  0, 
    max: decisions.length, 
    integer: true
  })

  if(!loading && !decisions?.length) {
    return ( <p>add some decisions</p> )
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