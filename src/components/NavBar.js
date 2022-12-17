import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { Divider, Drawer, ListItem } from '@mui/material';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Collapse from '@mui/material/Collapse';
import { Link, Route, Routes, useNavigate } from 'react-router-dom';
import LoginDialog from './LoginDialog';


const pages = ['Collges', 'Exam', 'Scholarships'];
const scholarships = ['Government', 'Private', 'International'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];
function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const [scholarMenu, setScholarMenu] = React.useState(null);
  const handleScholarOpenNavMenu = (event) => {
    setScholarMenu(event.currentTarget);
  };
  const handleScholarCloseNavMenu = () => {
    setScholarMenu(null);
  };
  const [loggedIn, setLoggedIn] = React.useState(false);
  const handleLoggedState = () => {
    setLoggedIn((prev) => !prev);

  }
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const [drawerState, setDrawerState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if(event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift'))
      return;
    setDrawerState({...drawerState, [anchor]: open});
  };

  const [scholarState, setScholarState] = React.useState(true);
  const toggleScholarBox = () => {
    setScholarState((prev) => !prev)
  };
  const list = (anchor) => (
    
    <Box
      sx={{width: 250}}
      role="presentation"
      // onClick={toggleDrawer(anchor, false)}
      onClick={scholarState ? toggleDrawer(anchor, false) : null}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {pages.map((text, idx) => (
          <ListItem key={text} disablePadding>
            {
              idx === 2 ? 
              <ListItemButton
                onClick={toggleScholarBox}
              >
                <ListItemText primary={text} />
                {scholarState? <ExpandLess />: <ExpandMore />}
              </ListItemButton>
              :
              <ListItemButton
                // href={`#${text}`}
                onClick={toggleDrawer}
              >
                <ListItemText primary={text} />
              </ListItemButton>
            }
          </ListItem>
        ))}
      </List>
      <Collapse in={scholarState} timeout="auto" unmountOnExit>
        <List
          sx={{pl: 1}}
        >
          {
            scholarships.map(scholarship => (
              <ListItem key={scholarship} disablePadding>
                <ListItemButton><ListItemText sx={{mr: 3}} primary={scholarship} /></ListItemButton>
              </ListItem>
            ))
          }
        </List>
      </Collapse>

      <Divider />
      {
        loggedIn ? 
        <List>
        {
          settings.map((option, idx) => (
            <ListItem key={option} disablePadding>
              {
                idx === 3 ?
                <ListItemButton onClick={handleLoggedState}>
                  <ListItemText primary={option} />
                </ListItemButton>
                :
                <ListItemButton>
                  <ListItemText primary={option} />
                </ListItemButton>
              }
            </ListItem>
          ))
        }
      </List>
      :
      null
      //TODO:ADD `Register User`
      }
    </Box>
  )

  return (
    <AppBar position="static" color="transparent">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon color='primary' sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            color='primary'
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              onClick={toggleDrawer('left', true)}
            >
              <MenuIcon />
            </IconButton>
            {/* DRAWER:LEFT */}
            <Drawer
              anchor='left'
              open={drawerState['left']}
              onClose={toggleDrawer('left', false)}
            >
              {list('left')}
            </Drawer>
            {/* DRAWER:LEFT */}
          </Box>
          <AdbIcon color='primary' sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            color='primary'
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page, idx) => {
              if(idx === 2) {
                return <Button
                  color="secondary"
                  key={page}
                  onClick={handleScholarOpenNavMenu}
                  sx={{ my: 2, display: 'block' }}>
                    {page}
                  </Button>
              } else {
                return <Button 
                  color="secondary"
                  key={page}
                  href={`#${page}`}
                  sx={{ my: 2, display: 'block' }}>
                    {page}
                  </Button>
              }
            })}
            {/* MENU */}
            <Menu
              sx={{ mt: '45px' }}
              color="transparent"
              id="menu-appbar"
              anchorEl={scholarMenu}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(scholarMenu)}
              onClose={handleScholarCloseNavMenu}
            >
              {scholarships.map((scholarship, idx) => (
                <MenuItem key={scholarship} onClick={handleScholarCloseNavMenu}>
                  {
                    idx === 1 ?
                      <Typography color="secondary" textAlign="center"><a href='/private'>{scholarship}</a></Typography>
                    :
                      <Typography color="secondary" textAlign="center">{scholarship}</Typography>
                  }
                </MenuItem>
              ))}
            </Menu>
            {/* MENU */}
          </Box>
          {!loggedIn ? 
          <Box className="flexClass" sx={{display: "flex", flexDirection: "row", justifyContent: "center", }}>
            <Box sx={{ flexGrow: 0 , pr: 1, alignSelf: "flex-start"}}>
              {/* TODO:LOGIN BUTTON */}
              <Button variant="outlined" onClick={handleClickOpen} color="secondary">
                Login
              </Button>
              {/* TODO:LOGIN BUTTON */}
            </Box>  
            <Box sx={{ flexGrow: 0 , pr: 1}}>
              {/* TODO:LOGIN BUTTON */}
              <Link to={`/registration`}>
                <Button variant="contained" color="primary">
                  Register
                </Button>
              </Link>
              {/* TODO:LOGIN BUTTON */}
            </Box> 
          </Box>
          :
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting, idx) => (
                idx === 3 ?
                <MenuItem key={setting} onClick={handleLoggedState}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
                : <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
              
            </Menu>
          </Box>}
          <LoginDialog 
            open={open} 
            handleOpen={handleClickOpen} 
            handleClose={handleClose}
            loggedIn={loggedIn}
            handleLoggedState={handleLoggedState}
          />
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;