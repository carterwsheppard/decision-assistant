import React, { useState } from "react";
import { useMutation } from '@apollo/client'
import { MUTATION_LOGIN, MUTATION_SIGNUP } from '../../utils/mutations'

import Auth from '../../utils/auth'


function Login() {
    // LOGIN FORM ============================================================
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
    // =========================================================================

    // SIGNUP FORM =============================================================
    const [signupState, setSignupState] = useState({
        username: '',
        email: '',
        password: ''
    })

    const [addUser, { error: signupError }] = useMutation(MUTATION_SIGNUP)

    const handleSignupChange = (event) => {
        const { name, value } = event.target

        setSignupState({
            ...signupState,
            [name]: value
        })
    }

    const handleFormSignup = async (event) => {
        event.preventDefault()

        try {
            const { data } = await addUser({
                variables: { ...signupState }
            })
            Auth.login(data.addUser.token)
        }
        catch (e) {
            console.error(e)
        }
    }
    // =========================================================================

    return (
        <div className="flex space-around">
            <div>
                <form 
                    className="flex contact-form" 
                    id="loginForm" 
                    onSubmit={handleFormLogin}
                >
                    <h3 className="">Login</h3>
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
            <div className="center">---OR---</div>
            <div>
                <form 
                    className="flex contact-form" 
                    id="signupForm" 
                    onSubmit={handleFormSignup}
                >
                    <h3 className="">Signup</h3>
                    <br></br>      

                    <label>Email:</label>
                    <input 
                        className="form-input" 
                        type="email" 
                        placeholder="Email"
                        name="email"
                        id="signupEmail"
                        value={signupState.email}
                        onChange={handleSignupChange}
                    />
                    <br></br>

                    <label>Username:</label>
                    <input 
                        className="form-input" 
                        type="username" 
                        placeholder="Username"
                        name="username"
                        id="signupUsername"
                        value={signupState.username}
                        onChange={handleSignupChange}
                    />
                    <br></br>
                    
                    <label>Password:</label>
                    <input 
                        className="form-input" 
                        type="password" 
                        placeholder="Password"
                        name="password"
                        id="signupPassword"
                        value={signupState.password}
                        onChange={handleSignupChange}
                    />
                    <br></br>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
}

export default Login;