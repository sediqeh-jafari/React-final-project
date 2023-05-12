import { useState } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";
import './style.css'
import { useNavigate } from 'react-router-dom';

function Register() {
    const Navigate = useNavigate()
    const [name, setname] = useState('');
    const [password, setpassword] = useState('');
    const [email, setemail] = useState('');

    function getHandler(setter) {
        return function Handler(e) {
            setter(e.target.value)
        }
    }

    function handleSubmit(e) {

        e.preventDefault()

        axios.post('https://moviesapi.ir/api/v1/register', {
            name: name,
            password: password,
            email: email,

        }).then((response) => {
            console.log({ data: response.data });
            
        })
        console.log({ name, password, email });
        Navigate('/')
    }
    

    return (
        <>
            <div className="header">
                <h2 className="text">Already have an account?</h2>
                <Link className="sign_in" to={'/Login'}>Sign in</Link>
            </div>
            <div className="parent_of_forme">
                <form onSubmit={handleSubmit} className='form'>

                    <label>
                        <p>UserName:</p>
                        <input value={name} onChange={getHandler(setname)} type='text' placeholder="username.."></input>
                    </label>
                    <label>
                        <p>PassWord:</p>
                        <input value={password} onChange={getHandler(setpassword)} type='password' placeholder="password..."></input>
                    </label>
                    <label>
                        <p>Email:</p>
                        <input value={email} onChange={getHandler(setemail)} type='text' placeholder="Email.."></input>
                    </label>

                    <button className="login"  type="submit">sign up</button>
                </form>

            </div>
        </>

    )
}

export default Register