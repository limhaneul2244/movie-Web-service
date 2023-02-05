import { useEffect, useState } from "react";

/**
 * 
 * @returns #7.2강_Coin Tracker
 */
const Coin = () => {
    const [loading, setLoading] = useState(true);
    const [coins, setCoins] = useState([]);
    useEffect(() => {
        fetch("https://api.coinpaprika.com/v1/tickers?limit=10")
        .then(response => response.json())
        .then((json)=> {
            setCoins(json);
            setLoading(false);
        })
    }, []);
    return (
        <>
            <h1 style={{color: 'red'}}>The Coins!!</h1>
            {loading ? <strong>Loading</strong> : null}
            <ul>
                {coins.map((coin, id)=> {
                    return <li key={id}>{coin.name} ({coin.symbol}) : {coin.quotes.USD.price}</li>
                })}
            </ul>
        </>
    )
}

export default Coin;