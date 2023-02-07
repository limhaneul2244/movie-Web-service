import styles from "./Movie.module.css";
import {Link} from "react-router-dom";


const Movie = ({id, largeCoverImage, title, summary, genres, year}) => {
    return (
        <div className={styles.movie}>
            <img className={styles.movie__img} src={largeCoverImage} />
            <h2 className={styles.movie__title}><Link to={`/Detail/${id}`}>{title}</Link></h2>
            <span className={styles.movie__year}>{year}</span>
            {summary !== "" ?
                // <div className={styles.textElip}>{summary.length > 235 ? "" : summary}</div>
                // <div className={summary.length > 235 ? styles[`textElip`] : ""}>{summary}</div>
                <div>{summary.length > 235 ? `${summary.slice(0, 235)}` : summary}</div>
                : <div>no data no data</div>
            }
            <div className={styles.movie__genres}>
                {genres.map((item, id) => <div key={id}>{item}</div>)}
            </div>
        </div>
    );
};

export default Movie;
