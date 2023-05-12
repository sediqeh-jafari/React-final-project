import './style.css';
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import enahncedFetch from "../../Service/Http";
import Header from '../Header';
function Genres() {
    const [Data, setData] = useState([]);
    // const [number, setNumber] = useState(1);
    const [Isloading, setIsloading] = useState(false);
    const [HasError, setHaserror] = useState(false);
    // const [Name, setName] = useState([]);

    const Genres = `https://moviesapi.ir/api/v1/genres`

    useEffect(() => {
        const fetchrequest = async () => {
            try {
                setIsloading(true)
                const response = await enahncedFetch('Get', Genres, Option)
                setData(response)
            } catch {
                setHaserror(true)
                setIsloading(false)
            } finally {
                setIsloading(false)
            }
        }
        fetchrequest()
    }, [Genres]);





    const render_list_of_movies = () => {
        if (HasError) {
            return <p>errored</p>
        }
        if (Isloading) {
            return <p className='isloading'>Isloading...</p>
        }

        return (
            Data.map((data) => {
                return<div  key={data.id} className='names_of_genres' >

                                <p>number:{data.id}</p>
                                <p>name : {data.name}</p>
                                <Link to={`/SpecialGenres/${data.id}`}>hi</Link> 
                            </div>

                        



            })
        )



    }


    return (
        <>
            <Header/>
            <div className='parent_of_genrs'>
                {render_list_of_movies()}
            </div>
        </>
    )
}
export default Genres