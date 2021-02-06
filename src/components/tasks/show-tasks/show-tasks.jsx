import React from 'react';
// MUI Stuff
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
// Components
import Task23Arg from '../task23Arg/task-2-3-arg';
import TasksContainerHeader from '../tasks-container-header/tasks-container-header';


const useStyle = makeStyles((theme) => ({
  section: {
    display: `flex`,
    height: `max-content`,
    flexWrap: `wrap`,
    justifyContent: `flex-start`,
    width: `1040px`,
  },
  inputBut: {
    width: `100%`,
    // height: `max-content`,
    padding: theme.spacing(1, 2),
    margin: theme.spacing(4, 0),
    color: theme.palette.secondary.ultradark,
    backgroundColor: theme.palette.secondary.main,
    fontSize: `20px`,
    // border: `none`,
  },
}));


// Рендер карточек
const ShowTasks = ({ tasks, onClearTasks }) => {
  const classes = useStyle();

  return (
    <>
      <TasksContainerHeader />

      <div className={classes.section}>
        {
          tasks.map(({ a, type1, b, type2, c }, index) => (
            <Task23Arg a={a} type1={type1} b={b} type2={type2} c={c} key={index} />
          ))
        }
      </div>

      <Button variant="contained" color="secondary" onClick={onClearTasks} className={classes.inputBut}>
        Заново
      </Button>
    </>
  );
};

export default ShowTasks;