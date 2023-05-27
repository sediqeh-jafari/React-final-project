import { Link } from "react-router-dom"

function HandleButtons() {

    function handeler() {
        if (localStorage.getItem('token', '')) {
            return <Link className='login_text' to={'/Profile'}>My profile</Link>
        } else {
            return <Link className='login_text' to={'/Login'}>login</Link>

        }
    }

    return (
        <>
            {handeler()}

        </>
    )
}


export default HandleButtons 