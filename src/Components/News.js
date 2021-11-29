import React from "react";
import Header from "./Header";
import Body from "./Body";
import Box from "@mui/material/Box"
const App = () => {
  return (
    <Box sx={{display: "flex"}}>
      <Header />
      <Body />
    </Box>
  )
}
export default App;
