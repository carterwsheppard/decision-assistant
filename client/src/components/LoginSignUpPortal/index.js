import React, { useState } from "react";
import { useMutation } from '@apollo/client'
import { MUTATION_LOGIN } from '../../utils/mutations'

import Auth from '../../utils/auth'


function Login() {
    const [formState, setFormState] = useState({
        email: '',
        password: '',
    })

    const [login, { error }] = useMutation(MUTATION_LOGIN)

    const handleChange = (event) => {
        const { name, value } = event.target

        setFormState({
            ...formState,
            [name]: value
        })
        
    }

    const handleFormLogin = async (event) => {
        event.preventDefault()

        try {
            const { data } = await login({
                variables: { ...formState }
            })
            console.log('here')
            Auth.login(data.login.token)
        }
        catch (e) {
            console.error(e)
        }

        // clear form
        setFormState({
            email: '',
            password: ''
        })
    }

    return (
        <div className="flex-row space-around">
            <div className="flex center">
            <div>
                <form 
                    className="flex contact-form" 
                    id="loginForm" 
                    onSubmit={handleFormLogin}
                >
                    <h3 className="">Login or Sign Up!</h3>
                    <br></br>
                    <div>
                        <label>Email:</label>
                        <input 
                            className="form-input" 
                            type="email" 
                            placeholder="Email"
                            name="email"
                            id="email"
                            value={formState.email}
                            onChange={handleChange}
                        />
                    </div>
                    <br></br>
                    
                    <label>Password:</label>
                    <input 
                        className="form-input" 
                        type="password" 
                        placeholder="Password"
                        name="password"
                        id="password"
                        value={formState.password}
                        onChange={handleChange}
                    />
                    <br></br>
                    <button type="submit">Submit</button>
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
        <div className="flex center">
            </div>
        </div>
    );
}

export default Login;