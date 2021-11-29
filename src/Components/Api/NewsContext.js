import React, {createContext, useEffect, useReducer} from "react";
import axios from "axios";

const API_KEY = process.env.REACT_APP_API_KEY;
const date = () => {
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth()).padStart(2, '0');
    const yyyy = today.getFullYear();
    return `${yyyy}-${mm}-${dd}`
}
const QUERY = "tesla";
const BASE_LINK = `https://newsapi.org/v2/everything?q=${QUERY}&from=${date}&sorBy=published&apiKey=`

const initialState = {
  loading: true,
  error: "",
  data: {} 
}

//ACTIONS TO BE TAKEN CARE OF:-
export const ACTIONS = {
  GET_DATA : "get-data",
  SET_DATA: "set-data",
  QUERY_SEARCH: "query-search"
}

//REDUCER FUNCTION
const reducer = (state, {type,payload}) => {
  switch (type) {
    case ACTIONS.GET_DATA:
      return {
        loading: false,
        error: "",
        data: payload.data
      }


    case ACTIONS.QUERY_SEARCH:
      return {
        loading: false,
        error: "No Error",
        data: {"testing": "done"} 
    }
    default:
      return state
  }
}

export const NewsContext= createContext();

export const NewsContextProvider = (({children}) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  
  useEffect(() => {
    axios
      .get(`${BASE_LINK}${API_KEY}`)
      .then((response) => { dispatch({type: ACTIONS.GET_DATA, payload:{data: response.data}})
      })
       .catch((error) => console.log(error));
  },[])
  
  return (
    <NewsContext.Provider value={{state, dispatch}}>
      {children}
      </NewsContext.Provider>
  )
})
