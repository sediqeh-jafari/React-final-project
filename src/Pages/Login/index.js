import { useState } from "react";
import './style.css'
import axios from 'axios'
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
function Login() {
    const Navigate = useNavigate()
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    function handleUsernamOnchange(e) {
        setUsername(e.target.value)
    }
    function handlePasswordOnchange(e) {
        setPassword(e.target.value)
    }


    const handleSubmit = async (e) => {
        e.preventDefault()
        
        const formData = new URLSearchParams();
        formData.append("grant_type", "password");
        formData.append("username", username);
        formData.append("password", password);

        const requestOptions = {
            method: 'POST',
            url: 'https://moviesapi.ir/oauth/token',
            data: formData,
            headers: {
                "content-type": "application/x-www-form-urlencoded"
            }

        };
        const response = await axios(requestOptions);
        localStorage.setItem('token', JSON.stringify(`Bearer ${response.data.access_token}`))
        localStorage.setItem('refresh_token', response.data.refresh_token)
        Navigate('/')
    }
    return (
        <>

            <div className="parent_of_forme">
                <form className="form" onSubmit={handleSubmit}>
                    <label>
                        <p>UserName:</p>
                        <input value={username} onChange={handleUsernamOnchange} type='text' placeholder="username"></input>
                    </label>

                    <label>
                        <p>PassWord:</p>
                        <input value={password} onChange={handlePasswordOnchange} type='password' placeholder="password"></input>
                    </label>

                    <button className="login" type="submit">Log in</button>
                    <Link className="Create_an_account" to={'/Register'}>Create an account.</Link>
                </form>
            </div>

        </>
    )
}


export default Login