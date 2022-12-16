import logo from './logo.svg';
import ResponsiveAppBar from './components/NavBar.js'
import './App.css';
import { Paper } from '@mui/material';
import { CssBaseline, ThemeProvider } from "@mui/material";
import { appTheme } from "./themes/theme";
import Registration from './components/Registration';

function App() {
  return (
    <div className="App"> 
      <ThemeProvider theme={appTheme}>
          <Paper>
            <ResponsiveAppBar/>
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <p>
                Edit <code>src/App.js</code> and save to reload.
              </p>
              <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn React
              </a>
          </header>
        </Paper>
      </ThemeProvider>
    </div>
  );
}

export default App;
