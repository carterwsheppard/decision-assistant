import React from "react";

function Login() {
    return (
        <div className="flex">
            <h3>Login or Sign Up!</h3>
            <form>
                <label>Username:</label>
                <input type="text" placeholder="Username" ></input>
                <label>Password:</label>
                <input type="text" placeholder="Password"></input>
            </form>
        </div>
    );
}

export default Login;