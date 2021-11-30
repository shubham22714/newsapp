import React, {useContext, useEffect, useState} from "react";
import NewsCard from "./NewsCard";
import Box from "@mui/material/Box";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

const Body = ({data, setPage, Pages, Page}) => {

  const handlePageChange =  (event, value) => {
     setPage(value);
  }

  return (
    <Box sx={{marginTop: "5rem", display: "flex", flexDirection:"column", flexWrap: "wrap"}}>

      <Stack spacing={2} sx={{display: "flex", justifyContent:"center", alignItems:"center"}}>
        <Pagination count={Pages} page={Page} onChange={handlePageChange}  shape="rounded" showFirstButton showLastButton />
      </Stack>

      <Box sx={{display:"flex", flexWrap:"wrap", marginTop: "1rem"}}> 
        {data.articles ? data.articles.map((news,index) => (
            <NewsCard newsImage={news.urlToImage} newsTitle={news.title} key={index} newsDescription={news.description} url={news.url} />
        )): "Loading..."}
      </Box>

      <Stack spacing={2} sx={{display: "flex", justifyContent:"center", alignItems:"center"}}>
        <Pagination count={Pages} page={Page} onChange={handlePageChange} shape="rounded" showFirstButton showLastButton />
      </Stack>
      </Box>
  )
}
export default Body;
//          dispatch({type: ACTIONS.GET_DATA, payload:{data: response.data}})
