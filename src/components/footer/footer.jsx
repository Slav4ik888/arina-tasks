import React from 'react';
// MUI Stuff
import { makeStyles } from '@material-ui/core/styles';

const useStyle = makeStyles((theme) => ({
  container: {
    display: `flex`,
    alignItems: `center`,
    justifyContent: `center`,
    width: `100%`,
    height: `100px`,
    color: theme.palette.secondary.dark,
    fontStyle: `italic`,
  },
}));


const Footer = ({ children }) => {
  const classes = useStyle();

    return (
      <div className={classes.container}>

          {children}
          
      </div>
    )
}


export default Footer;
