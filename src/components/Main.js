import React from 'react';
import { Paper, Card, Box, Typography, CardActions, CardContent, Button } from '@mui/material';
import { Link } from 'react-router-dom';
function Main({ logo }) {
  return (
    <Paper>
      <Box sx={{minWidth: 275}}>
        <Card variant="outlined">
          <CardContent>
            <Typography variant="h5" component="div">
              WELCOME
            </Typography>
          </CardContent>
          <CardActions>
            <Link to="https://reactjs.org">
              <Button variant='outlined' color='secondary'>
                Learn React
              </Button>
            </Link>
          </CardActions>
          <img src={logo} className="App-logo" alt="logo" />
          <p>
          Edit <code>src/App.js</code> and save to reload.
          </p>
          
        </Card>
      </Box>
    </Paper>
  )
}

export default Main;