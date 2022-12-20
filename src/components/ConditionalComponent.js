import React, { useState, } from 'react';
import Private from "./scholarships/Private";
import CloseIcon from '@mui/icons-material/Close';
import { Box, Alert, AlertTitle, Paper, Typography, Collapse, IconButton, Button } from '@mui/material';
import App from "../App";
function ConditionalComponent({token}) {
  console.log("Token - ", token);
  const [errOpen, setErrOpen] = useState(true);
  if(token)
    return <Private />
  else
    return (
      <>
        <Box>
          <Collapse in={errOpen}>
            <Alert 
              severity='error'
              action={
                <IconButton
                  aria-label="close"
                  color="inherit"
                  size="small"
                  onClick={() => {
                    setErrOpen(false);
                  }}
                >
                  <CloseIcon fontSize="inherit" />
                </IconButton>
              }
              sx={{ mb: 2 }}
            >
                <AlertTitle>Error</AlertTitle>
                Login required.
              </Alert>
          </Collapse>
        </Box>
        <App />
      </>
      
    )
}

export default ConditionalComponent