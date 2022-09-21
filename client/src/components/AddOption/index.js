import React from "react";
import ListPortal from "../ListPortal";

function AddOption() {
    return (
        <div>
            <div className="flex center">
                <div>
                
                <form className="flex contact-form">
                <h3 className="">Enter an Option to Add to the List:</h3>
                <br></br>
                    <label>Summary of Decision Option:</label>
                    <input className="form-input" type="text" placeholder="Enter Summary Here.."></input>
                    <br></br>
                    <button onClick={() => console.log("Add Submit Logic")}>Submit</button>
                </form>
                </div>
            </div>
            <div className="flex center"><ListPortal /></div>
        </div>
    );
}

export default AddOption;