import React,{ useState, } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Paper } from '@mui/material';
import Button from '@mui/material/Button';
function Form({login, handleLoggedState, handleClose}) {
  const [email, checkEmail] = useState('');
  const [password, checkPassword] = useState('');
  const handleSubmit = e => {
    e.preventDefault();
    // console.log(`Email <${email}> Password <${password}> login <${login}>`);
    handleLoggedState();
    handleClose();
  };
  return (
    <Paper>
      <Box>
        <form onSubmit={handleSubmit}>
          <Box sx={{maxWidth: '100%', width: 500}}>
            <TextField 
              fullWidth
              label="Email" 
              variant="outlined" 
              type="email" 
              required 
              value={email}
              onChange={e => checkEmail(e.target.value)}
            />
          </Box>
          <Box sx={{p: 2,maxWidth: '100%', width: 500}}>
            <TextField 
              fullWidth
              label="Password" 
              variant="outlined" 
              type="password" 
              required 
              onChange={e => checkPassword(e.target.password)}
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
    </Paper>
  )
}

export default Form