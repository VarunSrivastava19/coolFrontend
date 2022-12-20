import React, { useState, useEffect, } from 'react';
import { Box, Alert, AlertTitle, Paper, Typography, Collapse, IconButton, Button } from '@mui/material';
import { Link, } from 'react-router-dom';
import LoginDialog from '../LoginDialog';
import axios from 'axios';
import Cookies from 'universal-cookie';
const cookies = new Cookies();

const token = cookies.get("TOKEN"); //ON LOCATION CALLING THIS COMPONENT
// const []

export default function Private() {

  const [message, setMessage] = useState("");
  // const [messageReceived, setMessageReceived] = useState(false);
  useEffect(() => {
    const config = {
      method: 'get',
      url: '/auth-endpoint',
      headers: {
        Authorization: `Bearer ${token}`
      },
    };

    axios(config)
      .then((response) => {
        setMessage(response.data.message);
      })
      .catch((error) => {
        console.log(error);
        setMessage("");
      });
  },[]);
    return (
      <Box>
        <Alert severity='success'>
          <AlertTitle>Authentication Successful</AlertTitle>
          <Typography>{message}</Typography>
        </Alert>
        <Link to="/">
          <Button>
            HOME
          </Button>
        </Link>
      </Box>
    );
  };