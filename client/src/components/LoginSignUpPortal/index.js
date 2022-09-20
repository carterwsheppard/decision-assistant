import React from "react";

function Login() {
    return (
        <div className="flex center">
            <div>
            
            <form className="flex contact-form">
            <h3 className="">Login or Sign Up!</h3>
            <br></br>
                <div>
                <label>Username:</label>
                <input className="form-input" type="text" placeholder="Username" ></input>
                </div>
                <br></br>
                
                <label>Password:</label>
                <input className="form-input" type="text" placeholder="Password"></input>
                <br></br>
                <button onClick={() => console.log("Add Submit Logic")}>Submit</button>
            </form>
            </div>
        </div>
    );
}

export default Login;