import React from 'react';
import ReactDOM from 'react-dom';
// MUI Stuff
import { ThemeProvider } from '@material-ui/core/styles';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import themeFile from './theme';

// Components
import App from './App';


const theme = createMuiTheme(themeFile);

ReactDOM.render(
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>,
  document.getElementById('root')
);
