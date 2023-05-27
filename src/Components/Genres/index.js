import './style.css';
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import enahncedFetch from "../../Service/Http";
import Header from '../Header';

function Genres() {
    const [Data, setData] = useState([]);
    const [Isloading, setIsloading] = useState(false);
    const [HasError, setHaserror] = useState(false);
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
                return <Link to={`/SpecialGenres/${data.id}`} key={data.id} className='names_of_genres'>

                    <p>number:{data.id}</p>
                    <p>Genre : {data.name}</p>
                </Link>
            })
        )
    }
    return (
        <>
            <Header />
            <div className='box'>
                <div id='parent_of_genrs'>
                    {render_list_of_movies()}
                </div>
            </div>
        </>
    )
}
export default Genres