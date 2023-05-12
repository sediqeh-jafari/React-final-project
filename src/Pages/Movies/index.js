import './style.css'
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import enahncedFetch from '../../Service/Http';
import PaginationGners from '../../Components/paginationGners';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';

function Movies() {
    const { id } = useParams()
    const [Data, setData] = useState([]);
    const [number, setNumber] = useState(1);
    const [Isloading, setIsloading] = useState(false);
    const [HasError, setHaserror] = useState(false);
    console.log(id);
    const Personol_Information = `https://moviesapi.ir/api/v1/movies/${id}`


    useEffect(() => {
        const fetchrequest = async () => {
            try {
                setIsloading(true)
                const response = await enahncedFetch('Get', Personol_Information, Option)
                setData(response)
              
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
          
                <div className='data_movies_card' key={Data.title}>

                    <p>id:{Data.id}</p>
                    <p>name : {Data.title}</p>
                   
                </div>



            
        )



    }


    return (
        <>
        <Header/>
        <div className='list_of_genrs'>
        {render_list_of_movies()}

        </div>
        <PaginationGners className='pagination'  Number={number} NewNumber={setNumber}/>
        <Footer/>
        </>
    )
}

export default Movies
