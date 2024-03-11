import {useEffect,useState} from "react";

function useCurrencyInfo(currency){
    const [data,setData] = useState({})

    useEffect(() => {
         fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
             .then((res) => res.json())
             .then((res) => setData(res[currency]))
        console.log(data);
    }, [currency]) /* Dependency m currency isliye liya because hum useEffect hook ko tab call krana chahte hain when currency variable m changes ho like usd,inr,etc.*/
    console.log(data);
    return data;
}

export default useCurrencyInfo;