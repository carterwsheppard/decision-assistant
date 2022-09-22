import React from "react";
import ListPortal from "../ListPortal";
import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { MUTATION_ADDDECISION } from '../../utils/mutations';


function AddOption() {
    const [inputState, setInputState] = useState({
        decisionText: ''
    })

    const [addedDecision, { error }] = useMutation(MUTATION_ADDDECISION);

    const handleChange = (event) => {
        const { name, value } = event.target;

        setInputState(event.target.value);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log("I have been clicked");

        try {
            await addedDecision({
                variables: { inputState }
            })
            console.log("I made it this far");
        }
        catch (e) {
            console.error(e);
        }

        // Clear Input
        setInputState({
            decisionText: ''
        })
    }
    return (
        <div>
            <div className="flex center">
                <div>
                
                <form className="flex contact-form">
                <h3 className="">Enter an Option to Add to the List:</h3>
                <br></br>
                    <label>Summary of Decision Option:</label>
                    <input 
                        className="form-input" 
                        type="text" 
                        placeholder="Enter Summary Here.."
                        name="decisionText"
                        id="decisionText" 
                        value={inputState.decisionText}
                        onChange={handleChange}
                    />
                    <br></br>
                    <button onClick={() => {handleSubmit()}}>Submit</button>
                </form>
                </div>
            </div>
            <div className="flex center"><ListPortal /></div>
        </div>
    );
}

export default AddOption;