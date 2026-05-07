import React, {useState} from 'react';
import '../auth.form.scss'
import { useAuth } from '../hooks/useAuth';
import { Link, useNavigate } from 'react-router';


const Login = () => {
    const {loading, handleLogin} = useAuth();
    const navigate = useNavigate();
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const handleSubmit = async (e) => {

        e.preventDefault();
        // Handle form submission logic here
       await handleLogin({email,password})
         navigate("/")
    }

    if(loading){
        return (<main><h1>Loading....</h1></main>)
    }

    return (
        <main>
            <div className="form-container">
            <form onSubmit={handleSubmit}>
                <h1 className='title'>Login</h1>
                <div className="input-group">
                    <label htmlFor="email">Email</label>
                    <input 
                    onChange={(e)=> {setEmail(e.target.value)}}
                    type="email" id="email" name="email" placeholder='Enter Email address'/>

                </div> 

                <div className="input-group">   
                    <label htmlFor="password">Password</label>
                    <input
                    onChange={(e)=> {setPassword(e.target.value)}}
                    type="password" id="password" name="password" placeholder='Enter Password'/>
                </div>

                <button className = "button primary-button" type="submit">Login</button>
            </form>  

            <p>Don't have an Account? <Link to={"/register"}>Register</Link></p> 

</div>
        </main>
    );
}

export default Login;