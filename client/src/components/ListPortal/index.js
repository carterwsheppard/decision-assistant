import React from "react";
import { QUERY_DECISIONS } from "../../utils/queries";
import { MUTATION_DELETEALLDECISIONS } from "../../utils/mutations";
import { useQuery , useMutation } from "@apollo/client"
//import Auth from "../../utils/auth";
//import { Link } from "react-router-dom";
//need to import queries once ready on back end

function ListPortal() {
    //need to replace with API route and then a random item from the returned array using rand number above
    const { loading, data } = useQuery(QUERY_DECISIONS)
    const decisions = data?.decisions || []
    console.log(decisions)

    const [deleteDecisions, {error}] = useMutation(MUTATION_DELETEALLDECISIONS)

    function deleteEm() {
      deleteDecisions()
      window.location.reload(false)
    }

    function getListDesc(item) {
      return <p className = {'modalContainer'}>{item.decisionText}</p>
    }

    function getUsername() {
      if (decisions.length > 0) {
        return decisions[0].username
      } else {
        <p>Error in API Response</p>
      }
    }

    function getOptions() {
      if (decisions.length > 0) {
       return decisions.map(decision => (
          getListDesc(decision)))
      } else {
        <p>No Decisions in DB for this User - please add a decision above and refresh the page.</p>
      }
    }

    return (
    <div>
        <div className = {'modalContainer'}>
        
        </div>
      <h4 className = {'modalContainer'}>
        List of Options for {loading ? (
          <div>Loading...</div>
        ) : (
         
          getUsername()

        )}
      </h4>
      {loading ? (
        <div>Loading...</div>
      ) : (

          getOptions()

      )}
      <div className = {'modalContainer'}>
      <button onClick={deleteEm}>Reset List Options</button>
      {error ? (
          <div>
            <p className="error-text">Error: The provided credentials are incorrect</p>
          </div>
        ) : null}
      </div>
      </div>
    )
  }

export default ListPortal;