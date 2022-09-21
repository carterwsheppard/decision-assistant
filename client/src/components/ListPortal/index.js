import React from "react";
import { QUERY_DECISIONS } from "../../utils/queries";
import { useQuery } from "@apollo/client"
//import Auth from "../../utils/auth";
//import { Link } from "react-router-dom";
//need to import queries once ready on back end

function ListPortal() {
    //need to replace with API route and then a random item from the returned array using rand number above
    const { loading, data } = useQuery(QUERY_DECISIONS)
    const decisions = data?.decisions || []
    console.log(decisions)

    function getListDesc(item) {
      return <p className = {'modalContainer'}>{item.decisionText}</p>
    }

            return (
            <div>
                <div className = {'modalContainer'}>
                
                </div>
            <h4 className = {'modalContainer'}>
            List of Options for {decisions[0].username}
            </h4>
            {decisions.map(decision => (
              getListDesc(decision)
            ))}
            <div className = {'modalContainer'}>
            <button onClick={() => window.location.reload(false)}>Reset List Options</button>
            </div>
            </div>
            )
          }

export default ListPortal;