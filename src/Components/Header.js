import React,{useContext, useState} from 'react';
//For creating custom Styles
import {styled, alpha} from  "@mui/material/styles";
//container
import Box from "@mui/material/Box";
//  Functional
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";

import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
//Icons
import SearchIcon from "@mui/icons-material/Search";
import LoginIcon from "@mui/icons-material/Login";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
//Side Drawer
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

// import d{ACTIONS,NewsContext} from "./Api/NewsContext";


const Search = styled('div')(({theme}) =>({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white,0,25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width:'auto',
  },
}))

const SearchIconWrapper = styled('div')(({theme}) => ({
  padding: theme.spacing(0,2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}))

const StyledInputBase  = styled(InputBase) (({theme}) =>({
  color: "inherit",
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    '&:focus':{
      width: '30ch',
    }
  }
}))


const Header = () => {
  // const {state, dispatch} = useContext(NewsContext);
  //
  
  const [isOpen, setIsOpen] = useState(false);

  const list = () => (
    <Box 
      onClick={()=>{setIsOpen(false)}}
      onKeyDown={() => {setIsOpen(false)}}
    >
      <List>
        {['Login', 'SignUp'].map((text,index)=>(
          <ListItem button key={text}>
            <ListItemText primary={text} />
            <ListItemIcon>
              {index === 0? <LoginIcon />: <AccountCircleIcon style={{float: "Right"}}/>}
            </ListItemIcon>
            <Divider />
          </ListItem>
        ))}
        </List>
    </Box>

  )

  return (
    <div>
      <SwipeableDrawer
        open={isOpen}
        onOpen={()=>setIsOpen(true)}
        onClose={()=>{setIsOpen(false)}}>
          {list()}
        </SwipeableDrawer>

      <Box sx={{flexGrow: 1}} 
        onClick ={()=>{}}>
        <AppBar position="fixed">
          <Toolbar>
                <IconButton 
                size="large"
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                  sx={{mr: 2}}
                  onClick={()=>{
                   setIsOpen(true) 
                  }}>
                     <MenuIcon />
                  </IconButton>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1}}>
                  NewsApp
                </Typography>
                   {/* insert a search UI */} 
                <Search>
                  <SearchIconWrapper>
                    <SearchIcon />
                    </SearchIconWrapper>
                  <StyledInputBase
                    placeholder="Search.."
                    inputProps={{"aria-label": "search"}} />
                </Search>
                   {/* end of search ui */}
                <Button color="inherit"> Search </Button>
            </Toolbar>
        </AppBar>
      </Box>
    </div>
  ) 
};

export default Header;

