import './style.css';
import { Link } from 'react-router-dom';
import HandleButtons from '../Button';
import images from '../../picture/images.png'
function Header() {





    return (
        <>
            <header id='Header'>
                <div id='top_of_header'>
                    <div className='header_text'>
                        <HandleButtons />
                        <Link className='Home_text' to={'/'}>Home</Link>
                    </div>
                    <div className='header_logo'>
                        <Link className='text_for_search' to={'/searchquery'}><i className="fa fa-search" ></i>
                        </Link>
                        <img className='logo' src={images}></img>
                    </div>

                </div>

            </header>

        </>
    )
}
export default Header