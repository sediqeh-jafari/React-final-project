import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './style.css'
function Profile() {
    const [result, setresult] = useState([]);
    const Navigate = useNavigate()

    useEffect(() => {
        const fetchrequest = async () => {

            const accesstoken = JSON.parse(localStorage.getItem('token'))
            console.log({'token1':   accesstoken});
            try {
                const userResponse = await axios.get('/api/user', {
                    headers: {
                        authorization: accesstoken,
                        "accept": "application/json"
                    }
                });
                setresult(userResponse.data)
                console.log({ 'data': result });

            } catch (error) {
                console.log(error);

                if (error.response.status === 401) {
                    const refreshtoken = JSON.parse(localStorage.getItem('refresh_token'));
                    console.log('errornew');

                    const formdata = new URLSearchParams();
                    formdata.append('grant_type', 'refresh_token');
                    formdata.append('refresh_token', refreshtoken);
                    try {


                        const response = await axios.post('http://moviesapi.ir/oauth/token',
                            formdata,
                            { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }
                        );
                        localStorage.setItem('access_token', JSON.stringify(`Bearer${response.data.access_token}`));
                        localStorage.setItem('refresh_token', JSON.stringify(response.data.refresh_token));
                        const fetchuserdata = async () => {

                            const Newtoken= `Bearer${response.data.access_token}`;
                            console.log(Newtoken);

                            try {
                                const userResponse = await axios.get('/api/user', {
                                    headers: {
                                        authorization: Newtoken,
                                        "accept": "application/json"
                                    }
                                });

                                setresult(userResponse.data)

                            } catch(error) {
                            }
                           

                        }
                        fetchuserdata()
                    } catch (error) {
                        console.log(error)

                    }
                }



            }
        }
        fetchrequest()
    }, []);


    function render() {
        return <div id="profile_datil">


            <div className="child_of_profile_datil">
                <div className="child">
                    <p>name is: {result.name} </p>
                    <p>email is: {result.email} </p>
                    <p>updated_at: {result.updated_at} </p>
                    <p>created_at: {result.created_at} </p>

                </div>


                <button className="logout" onClick={handleClick}>Log out</button>

            </div>

        </div>
    }


    function handleClick() {
        localStorage.setItem('token', '')
        localStorage.setItem('refresh_token', '')
        Navigate('/')
    }

    return (
        <>
            {render()}

        </>
    )
}

export default Profile