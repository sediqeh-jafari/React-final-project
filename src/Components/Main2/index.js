import './style.css';
import { useState, useEffect } from "react";
import enahncedFetch from "../../Service/Http";
import Main from '../Pagination25'
import Header from '../Header'
import { useNavigate } from 'react-router-dom';

function Main2() {
    const Navigate = useNavigate()
    const [Data, setData] = useState([]);
    const [number, setNumber] = useState(1);
    const [Isloading, setIsloading] = useState(false);
    const [HasError, setHaserror] = useState(false);
    const [Name, setName] = useState('');


    const Personol_Information = ` https://moviesapi.ir/api/v1/movies?q=${Name}&page=${number}`
    const Genres = `https://moviesapi.ir/api/v1/genres`


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


    const fetchrequest = async () => {
        try {
            setIsloading(true)
            const response = await enahncedFetch('Get', Genres, Option)
            setData(response)
            console.log(Data);
        } catch {
            setHaserror(true)
            setIsloading(false)
        } finally {
            setIsloading(false)
            if (Data) {
                return <div className='data_movies_card' key={Data.id}>

                    <p>number:{Data.id}</p>
                    <p>name : {Data.name}</p>
                    <p>country is:{Data.country}</p>

                </div>
            }
        }

    }


    // const resultSearch = Data.filter((item) => item.title.toLowerCase().startsWith(Name.toLowerCase()));
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

                    <p>number:{data.id}</p>
                    <p>name : {data.title}</p>
                    {/* <p>country is:{data.country}</p> */}

                </div>



            })
        )



    }


    function handleChange(e) {
        
        if (e.target.value === 0) {
            console.log('nothing');
            Navigate('/')
        }else{
            setName(e.target.value)
        console.log(Name);
        }
    }
    return (
        <>
            <Header />
            <div className='parent'>
                <input onChange={handleChange} className='serchquery' />

                <div className='data_movies'>
                    {render_list_of_movies()}
                </div>


            </div>
            <Main Number={number} NewNumber={setNumber} />

        </>
    )
}
export default Main2