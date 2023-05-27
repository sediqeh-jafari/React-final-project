import './style.css';
import { useState, useEffect } from "react";
import enahncedFetch from "../../Service/Http";
import Main from '../../Components/Pagination25'
import { useNavigate } from 'react-router-dom';
import SearchHeader from '../../Components/Searchheader';
function Searchquery() {
    const Navigate = useNavigate()
    const [Data, setData] = useState([]);
    const [number, setNumber] = useState(1);
    const [Isloading, setIsloading] = useState(false);
    const [HasError, setHaserror] = useState(false);
    const [Name, setName] = useState('');


    const Personol_Information = ` https://moviesapi.ir/api/v1/movies?q=${Name}&page=${number}`


    useEffect(() => {
        const fetchrequest = async () => {
            try {
                setIsloading(true)
                const response = await enahncedFetch('Get', Personol_Information, Option)
                setData(response.data)
            } catch {
                setHaserror(true)
                setIsloading(false)
            } finally {
                setIsloading(false)
            }
        }
        fetchrequest()
    }, [Personol_Information]);


  


    const render_list_of_movies = () => {
        if (Isloading){
            return <p id='Searchquery__isloading'>
                <p id='cover__isloading'>Isloading</p>
            </p>
        }
        if (HasError) {
            return <p>errored</p>
            
        }
        

        return (
            Data.map((data) => {
                return <div className='movies_card' key={data.id}>

                    <p>number:{data.id}</p>
                    <p>name : {data.title}</p>

                </div>



            })
        )



    }


    function handleChange(e) {

        if (e.target.value === 0) {
            console.log('nothing');
            Navigate('/')
        } else {
            setName(e.target.value)
            console.log(Name);
        }

    }
    
    return (


        <>

            <SearchHeader />
            <div className='Searchquery'>
                <div className='Searchquery_cover'>
                    <label id='text_of_search_hear'>
                        Search Here :

                    </label>
                    <br></br>
                    <input onChange={handleChange} id='serchquery__input' />

                    <div className='data_movies'>
                        {render_list_of_movies()}
                    </div>
                    <Main Number={number} NewNumber={setNumber} />
                </div>

            </div>

        </>



    )
}
export default Searchquery