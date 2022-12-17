import React from 'react';
import { Alert, AlertTitle, Paper, Typography, Collapse, IconButton, Button } from '@mui/material';
import { Link, } from 'react-router-dom';
function Private() {
  return (
    <Paper>
      <Alert severity='info'>
        <AlertTitle>Authenticated.</AlertTitle>
        <Link to='/'>
          <Button variant='outlined'>HOME</Button>
        </Link>
      </Alert>
    </Paper>
  )
}

export default Private;