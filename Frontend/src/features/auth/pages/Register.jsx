import { useState } from 'react';
import React from 'react';
import { Link, useNavigate } from 'react-router';
import { useAuth } from '../hooks/useAuth';

const Register = () => {
    
    const navigate = useNavigate();

    const [username,setUsername] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");


    const {loading, handleRegister} = useAuth();

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Handle form submission logic here

        await handleRegister({username,email,password})
        navigate("/")

    }
    if(loading){
        return (<main><h1>Loading....</h1></main>)
    }
    
    return (
        <main>
            <div className="form-container">
            <form onSubmit={handleSubmit}>
                <h1 className='title'>Register</h1>
                <div className="input-group">
                    <label htmlFor="email">Username</label>
                    <input 
                    onChange={(e)=>{setUsername(e.target.value)} }
                    type="text" id="username" name="username" placeholder='Enter username'/>

                </div>

                <div className="input-group">
                    <label htmlFor="email">Email</label>
                    <input 
                    onChange={(e)=>{setEmail(e.target.value)} }
                    type="email" id="email" name="email" placeholder='Enter Email address'/>

                </div> 

                <div className="input-group">   
                    <label htmlFor="password">Password</label>
                    <input 
                    onChange={(e)=>{setPassword(e.target.value)} }
                    type="password" id="password" name="password" placeholder='Enter Password'/>
                </div>

                <button className = "button primary-button" type="submit">Register</button>
            </form> 

            <p>Already have an Account? <Link to={"/login"}>Login</Link></p> 
</div>
        </main>
    );
}


export default Register;