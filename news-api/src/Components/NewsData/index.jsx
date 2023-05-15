import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import getNews from '../../APIs/getNews'
import "./index.css"

function NewData() {
    const [data, setData] = useState([]);

    useEffect(() =>{
        async function fetchData() {
            let result = await getNews();
        console.log("Result : ",result);
        setData(result);
        }
        fetchData();
    },[])
  return (
    <div>
      <h1>News By Priyanka Sidgiddi</h1>
      <div className="newsData">
      {data != null && data.length ? data.map((item) => {
        return <div>
            <h2>{item.title}</h2>
            <img src={item.urlToImage} alt={item.url} width="200px" height="200px"/>
            <h4>{item.content}</h4>
            <p>{item.description}</p>
        </div>
      }) : <span>Loading....</span>}
      </div>
    </div>
  )
}

export default NewData
