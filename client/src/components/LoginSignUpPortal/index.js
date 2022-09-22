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
<<<<<<< HEAD
        <div className="flex space-around">
=======
        <div className="flex-row space-around">
            <div className="flex center">
>>>>>>> 61a5d0363bcb8376815f110fb466f294cd8271fd
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
<<<<<<< HEAD
=======
                </div>
>>>>>>> 61a5d0363bcb8376815f110fb466f294cd8271fd
            </div>
            <div className="center">---OR---</div>
            <div>
                <form 
                    className="flex contact-form" 
                    id="loginForm" 
                    //onSubmit={handleFormLogin}
                >
                    <h3 className="">Signup</h3>
                    <br></br>
<<<<<<< HEAD
                    <div>
                        <label>Email:</label>
                        <input 
                            className="form-input" 
                            type="email" 
                            placeholder="Email"
                            name="email"
                            id="email"
                            value={formState.email}
                            //onChange={handleChange}
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
                        //onChange={handleChange}
                    />
                    <br></br>
                    <button type="submit">Submit</button>
                </form>
=======
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
>>>>>>> 61a5d0363bcb8376815f110fb466f294cd8271fd
            </div>
        </div>
    );
}

export default Login;