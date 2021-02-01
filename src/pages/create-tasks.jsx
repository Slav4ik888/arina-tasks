import React from 'react';
// MUI Stuff
import { makeStyles } from '@material-ui/core/styles';
// Components
import TasksContainer from '../components/tasks-container/tasks-container';


const useStyle = makeStyles((theme) => ({
  container: {
    margin: `auto`,
  },
  box: {
    display: `flex`,
    flexDirection: `column`,
    alignItems: `center`,
    justifyContent: `space-between`,
    margin: theme.spacing(2, 0),
  },
}));


const CreateTasks = () => {

  const classes = useStyle();

  return (
    <div className={classes.container}>
      <div className={classes.box}>  
        <TasksContainer />
      </div>
    </div>
  );
}

export default CreateTasks;
