import {useParams} from "react-router-dom";

const Detail = () => {
    const {x} = useParams();
    console.log(x)
    return <h1>Detail {x}</h1>
}

export default Detail;