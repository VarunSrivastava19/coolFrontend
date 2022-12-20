import React, { useState } from 'react';
import logo from './logo.svg';
import ResponsiveAppBar from './components/NavBar.js'
import './App.css';
import { Paper } from '@mui/material';
import { ThemeProvider } from "@mui/material";
import { appTheme } from "./themes/theme";
import Registration from './components/Registration';
import { Routes, Route, } from 'react-router-dom';
import Private from './components/scholarships/Private';
import Cookies from "universal-cookie";
import Main from './components/Main';
const cookies = new Cookies();

const token = cookies.get("TOKEN"); 
function App() {

  const [loggedIn, setLoggedIn] = useState(false);
  const handleLoggedInState = () => {
    if(token)
    {  
      setLoggedIn(true);
    }
    else setLoggedIn(false);
    window.location.href = "/";
  }
  const handleLoggedOutState = () => {
    if(token) {
      cookies.remove("TOKEN", { path: "/" });
      window.location.href = "/";
    }
  }

  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  }
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div className="App"> 
      <ThemeProvider theme={appTheme}>
        <Paper>
          <ResponsiveAppBar 
            loggedIn={loggedIn}
            handleLoggedState={handleLoggedInState}
            handleLoggedOutState={handleLoggedOutState}
            open={open}
            handleClickOpen={handleClickOpen}
            handleClose={handleClose}
          />
          <Main logo={logo} />
        </Paper>
      </ThemeProvider>
      <Routes>
        <Route path='/registration' element={<Registration/>} />
        <Route path='/private' element={(<Private />)} />
      </Routes>
    </div>
  );
}

export default App;