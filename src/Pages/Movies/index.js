import './style.css'
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import enahncedFetch from '../../Service/Http';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';

function Movies() {
    const { id } = useParams()
    const [Data, setData] = useState([]);
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

            <div className='movies_card_special' key={Data.title}>
                <div className='text_special_movie'>

                    <div id='data'>
                        <p>name : {Data.title}</p>
                        <p>released: {Data.released}</p>
                        <p>writer is: {Data.writer}</p>
                        
                        <p>awards : {Data.awards}</p>
                        <p>runtime : {Data.runtime}</p>
                        <p>Build quality: Excellent</p>
                        <p>Filming location: Taatar Shahr</p>
                        <p>year is: {Data.year}</p>
                        <p>actors : {Data.actors}</p>
                        <p>Professional assistant director</p>

                    </div>
                </div>
                <p id='between'>gg</p>
                <div>
                    <p></p>
                    <img alt='this is picture' id='poster' src={Data.poster}></img>
                </div>

            </div>

        )
    }


    return (
        <>
            <Header />
            <div >
                {render_list_of_movies()}

            </div>
            <Footer />
        </>
    )
}

export default Movies
