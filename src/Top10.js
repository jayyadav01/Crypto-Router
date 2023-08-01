import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Top10() {
    const [data,setdata] = useState([]);

    useEffect(() => {
        axios.get('https://api.coinlore.net/api/tickers/').then((response) => {
            console.log(response.data.data);
            setdata(response.data.data)
        })
    } , [])
    
  return (
    <>
        <h1 className='heading'>Top 10 Global Crypto Coins</h1>
        <div className='boxes'>

        { 
            data.filter((ele) => ele.rank<=10).map((data,index) => {
                return  <div className='box' key={index}>   
                        <p>Rank #{data.rank}</p>
                        <h4>{data.name} ({data.symbol})</h4>
                        <p>Price : {data.price_usd}</p>
                    </div>
                })
        }
        </div>
    </>
  )
}

export default Top10
