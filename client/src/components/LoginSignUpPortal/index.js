import React from "react";

function Login() {
    return (
        <div className="flex-row space-around">
            <div className="flex center">
                <div>
                    <form className="flex contact-form">
                    <h3 className="">Login</h3>
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
            <div className="center">OR</div>
            <div className="flex center">
                <div>
                    <form className="flex contact-form">
                    <h3 className="">Signup</h3>
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
        </div>
    );
}

export default Login;