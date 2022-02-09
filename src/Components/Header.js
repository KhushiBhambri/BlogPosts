import * as React from 'react';
import { useState} from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
// import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import './Component.css'
const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));
function search(){
  console.log("hi")
}


export default function Header({searchval,setsearchval,search,pg}) {
  const handleChange = (event) => {
    setsearchval(event.target.value);
  };
  const handleKey = (event)=>{
    search();
  }
  
  // console.log("search->",searchval);


  return (
    <Box sx={{ flexGrow: 1 }} >
      <AppBar position="static" className="header">
        <Toolbar>
          {/*
           <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton> 
          */}
          <Typography
            variant="h6"
            noWrap
            component="div"
            align="left"
            sx={{ flexGrow: 1, display: { sm: 'block' } }}
          >
            Khushi Bhambri Blogs
          </Typography>
         
          <Search className="searchfield">
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search"
              inputProps={{ 'aria-label': 'search' }}
              value={searchval}
              onChange={handleChange}
              onKeyPress={event => {
                if (event.key === 'Enter') {
                  handleKey(event);
                }
              }}
            />
          </Search>
          <a className="PageNo" href="#Pages">Page {pg}</a>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
