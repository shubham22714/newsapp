import React, {useContext, useEffect, useState} from "react";
import NewsCard from "./NewsCard";
import ACTIONS from "./Api/NewsContext"
import {NewsContext} from "./Api/NewsContext"; 
import Box from "@mui/material/Box";

const Body = () => {
  const {state, dispatch} = useContext(NewsContext);

  const data = state.data

  return (
    <Box sx={{marginTop: "5rem", display: "flex", flexWrap: "wrap"}}>
      {data.articles ? data.articles.map((news) => (
        <NewsCard newsImage={news.urlToImage} newsTitle={news.title} key={news.title} newsDescription={news.description} url={news.url}/>
      )): "Loading..."}
    </Box>
  )
}
export default Body;
