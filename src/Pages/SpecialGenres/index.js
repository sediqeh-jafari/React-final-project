import './style.css'
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import enahncedFetch from '../../Service/Http';
import PaginationGners from '../../Components/paginationGners';
import Header from '../../Components/Header';
import { Link } from "react-router-dom";

function SpecialGenres() {
    const { id } = useParams()
    const [Data, setData] = useState([]);
    const [number, setNumber] = useState(1);
    const [PageCount, setPageCount] = useState([]);
    const [Isloading, setIsloading] = useState(false);
    const [HasError, setHaserror] = useState(false);
    console.log(id);
    const Personol_Information = ` https://moviesapi.ir/api/v1/genres/${id}/movies?page=${number}`


    useEffect(() => {
        const fetchrequest = async () => {
            try {
                setIsloading(true)
                const response = await enahncedFetch('Get', Personol_Information, Option)
                setData(response.data)
                setPageCount(response.metadata.page_count)
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
        if (HasError) {
            return <p>errored</p>
        }
        if (Isloading) {
            return <p className='parent_isloading' >

                <p id='isloading'>Isloading...</p>

            </p>
        }

        return (
            Data.map((data) => {
                return <Link className='link_data' key={data.id} to={`/Movies/${data.id}`}>

                    <img id='img' src={data.poster}></img>
                    <div id='text_gners'>
                        <p>name : {data.title}</p>
                        <p>Genrs is:{data.genres}</p>
                    </div>
                    <button id='link-data__button'>Click here</button>

                </Link>




            })
        )



    }


    return (
        <>
            <Header />
            <div className='list_of_genrs'>
                {render_list_of_movies()}

            </div>
            <PaginationGners className='pagination' title={PageCount} Number={number} NewNumber={setNumber} />

        </>
    )
}

export default SpecialGenres