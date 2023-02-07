import { useEffect, useState } from "react";
import {useParams} from "react-router-dom";

const Detail = () => {
    const {id} = useParams();
    const [loading, setLoading] = useState(true);
    const [detailMovie, setDetailMovie] = useState([]);
    const getMovie = async () => {
        const json =  await(
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json();
        setDetailMovie(json.data.movie);
        setLoading(false);
    } 
    console.log(detailMovie)

    
    useEffect(() => {
        getMovie();
    }, []);

    return (
        <>
            <div>{detailMovie.title}</div>
            <img src={detailMovie.medium_cover_image}/>
            <div>{detailMovie.description_intro}</div>
        </>
    )
}

export default Detail;