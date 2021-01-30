import React from 'react';
// MUI Stuff
import { makeStyles } from '@material-ui/core/styles';
// Components
import TasksContainer from './components/tasks-container/tasks-container';
import Footer from './components/footer/footer';


const useStyle = makeStyles((theme) => ({
  body: {
    // height: `100vh`,
    display: `flex`,
    flexDirection: `column`,
  },
  container: {
    // width: `70%`,
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


const App = () => {

  const classes = useStyle();

  return (
    <div className={classes.body}>
      <div className={classes.container}>
        <div className={classes.header}>  
          <TasksContainer />
        </div>
      </div>

      <Footer> © 2021 Created by Slav4ik888</Footer>
    </div>  
  );
}

export default App;
//  git add . && git commit -m "big refactor" && git push origin master
