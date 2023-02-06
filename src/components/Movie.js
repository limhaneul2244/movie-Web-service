import "../main.css";
import {Link} from "react-router-dom";


const Movie = ({id, largeCoverImage, title, summary, genres}) => {
    return (
        <div>
            <img src={largeCoverImage} />
            <h3><Link to={`/Detail/${id}`}>{title}</Link></h3>
            {summary !== "" ? <div className='textElip'>{summary}</div> : <div>no data</div>}
            <ul>
                {genres.map((item, id) => <li key={id}>{item}</li>)}
            </ul>
        </div>
    );
};

export default Movie;
