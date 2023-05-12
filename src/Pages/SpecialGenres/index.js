import './style.css'
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import enahncedFetch from '../../Service/Http';
import PaginationGners from '../../Components/paginationGners';
import Header from '../../Components/Header';
import { Link } from "react-router-dom";
import Footer from '../../Components/Footer';

function SpecialGenres() {
    const { id } = useParams()
    const [Data, setData] = useState([]);
    const [number, setNumber] = useState(1);
    const [PageCount, setPageCount]= useState([]);
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
                console.log(Data);
                console.log(PageCount);
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
            return <p className='isloading'>Isloading...</p>
        }

        return (
            Data.map((data) => {
                return <div className='data_movies_card' key={data.id}>

                    <Link to={`/Movies/${data.id}`}>hi</Link>
                    <p>id:{data.id}</p>
                    <p>name : {data.title}</p>
                    <p>country is:{data.genres}</p>
                    <p>page is: {PageCount}</p>
                </div>



            })
        )



    }


    return (
        <>
        <Header/>
        <div className='list_of_genrs'>
        {render_list_of_movies()}

        </div>
        <PaginationGners className='pagination' title={PageCount} Number={number} NewNumber={setNumber}/>
        <Footer/>
        </>
    )
}

export default SpecialGenres