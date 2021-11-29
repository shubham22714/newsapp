import React,{useContext} from 'react';

import {ACTIONS,NewsContext} from "./Api/NewsContext";

const News = (props) => {
  const {state, dispatch} = useContext(NewsContext);
  return (
    <div>
      testing..
      {console.log(state)} 
      
    </div>
  ) 
}

export default News;
