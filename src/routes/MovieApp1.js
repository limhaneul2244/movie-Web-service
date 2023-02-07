import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Movie from "../components/Movie";
import styles from "./MovieApp1.module.css";

const MovieApp1 = () => {
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    const getMovies = async () => {
        const json = await (await fetch(`https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year`)).json();
        setMovies(json.data.movies);
        setLoading(false);
    };
    useEffect(() => {
        getMovies();
    }, []);

    console.log(movies);
    return (
        <>
            {loading ? (
                <h3 className={styles.loader}>Loading</h3>
            ) : (
                movies.map((movie) =>
                    <Movie
                        key={movie.id}
                        id={movie.id}
                        largeCoverImage={movie.medium_cover_image}
                        title={movie.title}
                        summary={movie.summary}
                        genres={movie.genres}
                        year={movie.year}
                    />
                )
            )}
        </>
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
