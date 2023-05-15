import React from 'react'
import axios from 'axios'
let data = null;
const api_key =  "https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=280bf23a6939475c8761ae0178c95a0c"
export default async function getNews() {
    await axios.get(api_key)
    .then(response => {
        console.log("response : ", response.data.articles)
        data = response.data.articles
    })
    .catch(err => console.log(err))
    return data;
}
