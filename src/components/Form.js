import React,{ useState, } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import CloseIcon from '@mui/icons-material/Close';
import { Alert, AlertTitle, Paper, Typography, Collapse, IconButton } from '@mui/material';
import Button from '@mui/material/Button';
import axios from 'axios';
const defaultValues = {
  "email": "",
  "password": "",
};
function Form({login, handleLoggedState, handleClose}) {
  const [loginValues, setLoginValues] = useState(defaultValues);
  const [error, setError] = useState(false);
  const [errOpen, setErrOpen] = useState(false);
  const [message, setMessage] = useState("");
  const handleSubmit = e => {
    e.preventDefault();
    axios.post('/login',{
      "email":loginValues.email,
      "password": loginValues.password
    }).then((response) => {
      console.log(`AXIOS POST(login) <${response.status}>`);
      if(response.status === 202) {
        const token = response.data.token; //LOGIN TOKEN
        handleLoggedState();
        handleClose();
      } else {
        console.log(`AXIOS ERROR - <${response.status}>`);
        console.log('Error details: ', response.data.message);
      }
    }).catch((error) => {
        console.log(`AXIOS ERROR - <${error.response.status}>`);
        console.log('Error details: ', error.response.data.message);
        if(error.response.status === 400) {
          messageHandler(error.response.data.message);
          handleError();
        }
    });
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLoginValues({
      ...loginValues,
      [name]: value,
    });
  };  
  const handleErrAlert = () => {
    setErrOpen((prev) => !prev);
  }
  const handleError = () => {
    setError(true);
    handleErrAlert();
  };
  const messageHandler = (str) => {
    setMessage(str);
  }
  return (
    <Paper>
      <Box>
        <form onSubmit={handleSubmit}>
          <Box sx={{maxWidth: '100%', width: 500}}>
            <TextField 
              fullWidth
              label="Email" 
              name="email"
              variant="outlined" 
              type="email" 
              required 
              value={loginValues.email}
              onChange={handleInputChange}
            />
          </Box>
          <Box sx={{p: 2,maxWidth: '100%', width: 500}}>
            <TextField 
              fullWidth
              label="Password" 
              name="password"
              variant="outlined" 
              type="password" 
              value={loginValues.password}
              required 
              onChange={handleInputChange}
            />
          </Box>
          <Box>
            <Button 
              type="submit" 
              variant="contained" 
              color="primary"
              sx={{width: 150, maxWidth: '50%', minWidth: '100%'}}
            >
              Login
            </Button>
          </Box>
        </form>
      </Box>
      {
        error?
        <Collapse in={errOpen}>
          <Alert 
          severity='error'
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={handleErrAlert}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
          sx={{ mb: 2 }}
        >
            <AlertTitle>Error</AlertTitle>
            {message}
          </Alert>
        </Collapse>
        :
          null
      }
    </Paper>
  )
}

export default Form;