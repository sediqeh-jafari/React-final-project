import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
function Profile() {
    const [Isloading, setIsloading] = useState(false);
    const [HasError, setHaserror] = useState(false);

    const accesstoken = JSON.parse(localStorage.getItem('token'))
    
    useEffect(() => {
        const fetchrequest = async () => {
            
            const accesstoken = JSON.parse(localStorage.getItem('token'))

            try {
                const userResponse = await axios.get('/api/user', {
                    headers: {
                        authorization: accesstoken,
                        "accept": "application/json"
                    }
                });
                console.log(userResponse);
            } catch (error) {
                console.log(error);



            }
        }
        fetchrequest()
    }, []);
   
    //     const headers = {
    //         "authorization": accesstoken,
    //         'accept': "application/json"
    //     }
    //     axios.get('https://moviesapi.ir/api/user', { headers })
    //         .then(response => {
    //             console.log(response.data);
    //         })

    // }, []);

    return (
        <>
            <p>HELLO</p>
        </>
    )
}

export default Profile