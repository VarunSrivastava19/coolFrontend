import React from 'react';
import Typography from '@mui/material/Typography';
import AppBar from '@mui/material/AppBar';
import Dialog from '@mui/material/Dialog';
import CloseIcon from '@mui/icons-material/Close';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import Slide from '@mui/material/Slide';
import { Toolbar } from '@mui/material';
import { IconButton } from '@mui/material';
import Form from './Form';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
const LoginDialog = ({ open, handleOpen, handleClose, loggedIn, handleLoggedState}) => {
  return (
    // props received from NavBar.js
    <Dialog open={open} onClose={handleClose} fullScreen TransitionComponent={Transition} sx={{display: 'flex', flexDirection: 'column'}}>
      <AppBar sx={{ position: 'relative' }}>
        <Toolbar>
          {/* // form to be created */}
          <IconButton
            edge="start"
            color="inherit"
            onClick={handleClose}
            aria-label="close"
          >
            <CloseIcon />
          </IconButton>
          <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
            Login
          </Typography>
        </Toolbar>
      </AppBar>
        <Form login={loggedIn} handleLoggedState={handleLoggedState} handleClose={handleClose}/>
    </Dialog>
  );
};

export default LoginDialog;