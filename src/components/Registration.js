import React, { useState } from "react";
import { appTheme } from "../themes/theme";
import { 
  AppBar,
  Paper, 
  Grid, 
  Button, 
  TextField, 
  FormControlLabel, 
  FormControl, 
  FormLabel,
  RadioGroup,
  Radio,
  Select,
  MenuItem,
  Slider,
  Box,
  Typography,
  Container,
  Toolbar,
  ThemeProvider,
 } from '@mui/material';
import { Link, Form } from 'react-router-dom';
import axios from "axios";
const defaultValues = {
  name: "",
  age: null,
  email: "",
  password: "",
  confirmPassword: "",
};
/**
 * 
 * @param {string | undefined} password 
 * @param {string | undefined} confirmPassword 
 * @returns undefined | boolean
 */
function validate(password, confirmPassword) {
  if(!password) return undefined;
  if(!confirmPassword) return undefined;
  if(typeof password !== "undefined" && typeof confirmPassword !== "undefined") {
    if(password !== confirmPassword) return false;
    else return true;
  }
}
function Registration() {
  
  const [formValues, setFormValues] = useState(defaultValues);
  const handleSubmit = e => {
    e.preventDefault();
    // console.log(formValues)
    console.log(`
      name <${formValues.name}> 
      age <${formValues.age}> 
      email <${formValues.email}> 
      password <${formValues.password}>
      confirmPassword <${formValues.confirmPassword}>
    `);
    axios.post('/register', {
      "email":formValues.email,
      "password":formValues.password,
      "name":formValues.name,
      "age":formValues.age
    }).then((response) => {
      console.log(`Axios <POST(db) ${response.status}>`);
      // TODO: CHECK STATUS === 201 <CREATED> THEN LOAD TO `\` OR `login`.
    }).catch((error) => console.log("Axios <POST(DB)> Error: ", error))
    // console.log(`<[VALIDATOR] ${validate(formValues.password, formValues.confirmPassword)}>`);
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };  
  const valid = validate(formValues.password, formValues.confirmPassword);
  return (
    <ThemeProvider theme={appTheme}>
      <Paper>
      <AppBar position="static" color="primary">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { 
                  md: 'flex', 
                  // xs: 'none',
                },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              REGISTER USER
            </Typography>
          </Toolbar>
        </Container>
      </AppBar>
      <Form onSubmit={handleSubmit}>
        <Grid container alignItems="center" justify="center" direction="column">
          <Grid item>
            <TextField
              id="name-input"
              name="name"
              label="Name"
              type="text"
              value={formValues.name}
              onChange={handleInputChange}
              color='secondary'
            />
          </Grid>
          <Grid item>
            <TextField
              id="age-input"
              name="age"
              label="Age"
              type="number"
              value={formValues.age}
              onChange={handleInputChange}
              color='secondary'
            />
          </Grid>
          <Grid item>
            <TextField
              id="email-input"
              name="email"
              label="Email"
              type="email"
              value={formValues.email}
              onChange={handleInputChange}
              color='secondary'
            />
          </Grid>
          <Grid item>
            <TextField
              id="password-input"
              name="password"
              label="Password"
              type="password"
              value={formValues.password}
              onChange={handleInputChange}
              color='secondary'
            />
          </Grid>
          <Grid item>
            <TextField
              id="confirmPassword-input"
              name="confirmPassword"
              label="Confirm Password"
              type="password"
              value={formValues.confirmPassword}
              onChange={handleInputChange}
              color='secondary'
            />
          </Grid>
          {
            (typeof valid != "undefined") ?
              
              (valid) ?
                <Grid item>
                  <Grid item>
                    <Button variant='outlined' color='primary' type='submit'>
                      REGISTER
                    </Button>
                    <Link to= '/'>
                      <Button variant='outlined' color='secondary' type='reset'>
                        CANCEL
                      </Button>
                    </Link>
                  </Grid>
                </Grid>
              :
                <Box>
                  <Grid item>
                    <Typography color="error">Incorrect Password</Typography>
                  </Grid>
                  <Grid item>
                    <Link to= '/'>
                      <Button variant='outlined' color='secondary' type='reset'>
                        CANCEL
                      </Button>
                    </Link>
                  </Grid>
                </Box>
            :
            <Box>
              <Grid item>
                <Typography color="error">Passwords are empty!</Typography>
              </Grid>
              <Grid item>
                <Link to= '/'>
                  <Button variant='outlined' color='secondary' type='reset'>
                    CANCEL
                  </Button>
                </Link>
              </Grid>
            </Box>
          }
        </Grid>
      </Form>

      </Paper>
    </ThemeProvider>
  )
};

export default Registration;