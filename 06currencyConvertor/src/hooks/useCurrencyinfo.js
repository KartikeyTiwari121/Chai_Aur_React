import { useEffect, useState } from "react";


function useCurrencyInfo(currency){
    const [data, setData] = useState({});
    // we have passed empty object in useState so that if fetch failed and no response comes, so looping on response prevent from crashing the website

    useEffect(()=>{
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        .then((res)=> res.json())
        .then((res)=> setData(res[currency]))
        //we write res[currency] so that we only gets currency list in response
        console.log(data);
    }, [currency])
    //wrote currency as dependency of useEffect so whenever there's change in currency the useEffect will again run. 
    console.log(data);
    return data;
}

export default useCurrencyInfo;



