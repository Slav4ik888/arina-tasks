import React from 'react';
// MUI Stuff
import { makeStyles } from '@material-ui/core/styles';
// Functions
import {showDate} from '../../../utils/dates.js';


const useStyle = makeStyles((theme) => ({
  section: {
    display: `flex`,
    flexDirection: `column`,
    alignItems: `flex-start`,
    // height: `max-content`,
    // flexWrap: `wrap`, 
    // justifyContent: `right`,
    width: `100%`,
  },
  cards: {
    display: `flex`,
    flexDirection: `row`,

  },
  
  card: {
    display: `flex`,
    flexWrap: `wrap`, 
    justifyContent: `flex-end`,
    padding: theme.spacing(1),
    margin: `0 10px 10px 0`,
    fontSize: `40px`,
    backgroundColor: theme.palette.primary.ultralight,
    border: `1px solid rgb(192, 192, 192)`,

  },
  year: {
    display: `flex`,
    flexWrap: `wrap`, 
    marginLeft: `7px`,
  },
  days: {
    display: `flex`,
    flexWrap: `wrap`, 
    marginLeft: `7px`,
  },
  day: {
    width: `35px`,
    height: `50px`,
    backgroundColor: `#fdfdfd`,
    border: `1px dotted rgb(146, 146, 146)`,
    textAlign: `center`,
    alignItems: `center`, 
    fontSize: `50px`,
    lineHeight: `50px`,
  },
  dot: {
  },
  line: {
    width: `100%`,
    borderTop: `2px solid rgb(92, 92, 92)`,
    marginBottom: `5px`,
  },
}));


const today = showDate(new Date().getTime(), `DD-MM-YYYY`).split(``);


// Шапка с датой
const TasksContainerHeader = () => {

  const classes = useStyle();

  const generateDay = (day) => <div className={classes.day}>{day}</div>;

  const generateDateCard = (date) => (
    <div className={classes.card}>
      <div className={classes.days}>
        {
          date.slice(0, 2).map((day, i) => <div key={`${day} + ${i}`}>{generateDay(day)}</div>)
        }
      </div>
      <span className={classes.dot}>.</span>

      <div className={classes.days}>
        {
          date.slice(3, 5).map((day, i) => <div key={`${day} + ${i}`}>{generateDay(day)}</div>)
        }
      </div>
      <span className={classes.dot}>.</span>
      <div className={classes.year}>
        {
          date.slice(6).map((day, i) => <div key={`${day} + ${i}`}>{generateDay(day)}</div>)
        }
      </div>
    </div>
  );

  return (
    <div className={classes.section}>
      <div className={classes.cards}>
        {
          generateDateCard([``, ``, ``, ``, ``, ``, ``, ``, ``, ``])
        }

        {
          generateDateCard(today)
        }
      </div>
      <div className={classes.line}></div>
    </div>
  );
}

export default TasksContainerHeader;