import React from 'react';
// MUI Stuff
import { makeStyles } from '@material-ui/core/styles';
// Components
// Functions


const useStyle = makeStyles((theme) => ({
  container: {
    margin: `auto`,
  },
  header: {
    display: `flex`,
    flexDirection: `column`,
    alignItems: `center`,
    justifyContent: `space-between`,
    margin: theme.spacing(2, 0),
  },
}));


const Home = () => {

  const classes = useStyle();

  return (
    <div className={classes.body}>
      <div className={classes.box}>  

        

      </div>
    </div>  
  );
}

export default Home;
