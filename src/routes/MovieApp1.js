import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Movie from "../components/Movie";
import styles from "./MovieApp1.module.css";
import axios from "axios";


const MovieApp1 = () => {
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    
    // const getMovies = async () => {
    //     const json = await (await fetch(`https://yts-proxy.nomadcoders1.now.sh/list_movies.json`)).json();
    //     setMovies(json.data.movies);
    //     setLoading(false);
    // };
    // useEffect(() => {
    //     getMovies();
    // }, []);
    
    //axios로 바꿔보기

    async function getMovies() {
        try {
            const json = await axios.get("https://yts-proxy.nomadcoders1.now.sh/list_movies.json");
            console.log(json)
            setMovies(json.data.data.movies);
            setLoading(false);
        }catch(error) {
            console.log("error")
        }
    }
    useEffect(() => {
        getMovies();
    }, []);

    console.log('movies=====', movies);
    return (
        <div className={styles.container}>
            {loading ? (
                <h3 className={styles.loader}>
                    Loading
                </h3>
            ) : (
                <div className={styles.movies}>
                    {movies.map((movie) =>
                        <Movie
                            key={movie.id}
                            id={movie.id}
                            largeCoverImage={movie.medium_cover_image}
                            title={movie.title}
                            summary={movie.summary}
                            genres={movie.genres}
                            year={movie.year}
                        />
                    )}
                </div>
            )}
        </div>
    );
};

MovieApp1.propTypes = {
    id: PropTypes.number.isRequired,
    largeCoverImage: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};
export default MovieApp1;
