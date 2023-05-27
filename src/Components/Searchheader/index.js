import './style.css';
import { Link } from 'react-router-dom';
import HandleButtons from '../Button';
function SearchHeader() {

    
  


    return (
        <>
            <header className='Header'>
                <div className='top_of_header'>
                    <div className='header_text'> 
                        <HandleButtons/>
                        <Link className='Home_text' to={'/'}>Home</Link>
                    </div>

                </div>

            </header>

        </>
    )
}
export default SearchHeader