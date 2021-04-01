import React from 'react';
import cl from 'classnames';
// MUI Stuff
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';


const useStyle = makeStyles((theme) => ({
  appBar: {
    top: 'auto',
    bottom: 0,
    height: `max-content`,
    position: `relative`,
    backgroundColor: `#565656`, // theme.palette.primary.main,
  },
  container: {
    display: `flex`,
    alignItems: `center`,
    justifyContent: `center`,
    width: `100%`,
    height: `64px`,
    color: theme.palette.secondary.dark,
    backgroundColor: theme.palette.primary.light,
    fontStyle: `italic`,
  },
}));


const Footer = ({ children }) => {
  const classes = useStyle();

  return (
      <AppBar position="static" className={cl(classes.appBar)}>
        <Toolbar className={classes.container}>

          {children}
          
        </Toolbar>
      </AppBar>
    )
}


export default Footer;
