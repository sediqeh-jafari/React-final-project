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

    const handleSubmit = async (e) => {
        e.preventDefault()

        const formData = new URLSearchParams()
        formData.append('name', name)
        formData.append('email', email)
        formData.append('password', password)

        const request = {
            method: 'POST',
            url: 'https://moviesapi.ir/api/v1/register',
            data: formData,
            headers: {
                "content-type": "application/x-www-form-urlencoded"
            }

        };
        const response = await axios(request);
        console.log(response);
        Navigate('/')


    }


    return (
        <>

            <div className="parent_of_forme">
                <form onSubmit={handleSubmit} className='form'>

                    <label>
                        <p>Name:</p>
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

                    <button className="login" type="submit">sign up</button>
                    <div id="header">
                        <h2 id="text">Already have an account?</h2>
                        <Link id="sign_in" to={'/Login'}>Sign in</Link>
                    </div>
                </form>

            </div>
        </>

    )
}

export default Register