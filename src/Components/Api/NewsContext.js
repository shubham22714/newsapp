import React, {createContext,  useReducer} from "react";


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

    case ACTIONS.SET_DATA:
      return {
        loading: false,
        error: "No Error",
        data: payload.data
      }
    default:
      return state
  }
}

export const NewsContext= createContext();

export const NewsContextProvider = (({children}) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  
  
  return (
    <NewsContext.Provider value={{state, dispatch}}>
      {children}
      </NewsContext.Provider>
  )
})
