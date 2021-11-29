import React from "react";
import { NewsContextProvider } from "./Components/Api/NewsContext.js";
import News from "./Components/News";
import './App.css';

const App = () => {
  return (
    <NewsContextProvider>
      <News />
      </NewsContextProvider>
  )
}

export default App;
