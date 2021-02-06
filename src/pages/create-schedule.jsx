import React from 'react';
// MUI Stuff
import { makeStyles } from '@material-ui/core/styles';
// Components
import ScheduleContainer from '../components/schedule/schedule-container/schedule-container';


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


const CreateSchedule = () => {

  const classes = useStyle();



  return (
    <div className={classes.container}>
      <div className={classes.box}>  
        <ScheduleContainer />
      </div>
    </div>
  );
}

export default CreateSchedule;
