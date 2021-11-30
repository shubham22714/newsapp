import React, {useState, useEffect, useContext} from "react";
import Header from "./Header";
import Body from "./Body";
import Box from "@mui/material/Box"
//
//Api Imports
//
import axios from "axios";
import {NewsContext} from "./Api/NewsContext"; 
import {ACTIONS} from "./Api/NewsContext"

const News = () => {
  const [Query, setQuery] = useState("")
  const [Page, setPage] = useState(1)

  const date = () => {
      const today = new Date();
      const dd = String(today.getDate()).padStart(2, '0');
      const mm = String(today.getMonth()).padStart(2, '0');
      const yyyy = today.getFullYear();
      return `${yyyy}-${mm}-${dd}`
  }
  const BASE_LINK_ORIGINAL = `https://newsapi.org/v2/everything?q=${Query}&from=${date}&pageSize=21&page=${Page}&sorBy=published&apiKey=`
  const BASE_LINK =`https://newsapi.org/v2/top-headlines?pageSize=21&page=${Page}&country=in&apiKey=`

  const API_KEY = process.env.REACT_APP_API_KEY
  const {state, dispatch} = useContext(NewsContext);
  const data = state.data

 // Pagination Begins
  const Pages = (~~(data.totalResults / 21))
  useEffect(() => {
       axios
      .get(`${(Query==="")?BASE_LINK:BASE_LINK_ORIGINAL}${API_KEY}`)
        .then((response) =>{
           dispatch({type: ACTIONS.SET_DATA, payload:{data: response.data}})
        })
        .catch((error) => console.log(error));
  },[Page, Query])
  

  return (

    <Box sx={{display: "flex"}}>
      <Header Query={Query} setQuery = {setQuery}/>
      <Body data={data} setPage={setPage} Pages={Pages} Page={Page}/>
    </Box>
  )
}
export default News;
