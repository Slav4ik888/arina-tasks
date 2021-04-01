import React from 'react';
// MUI Stuff
import { makeStyles } from '@material-ui/core/styles';
// Components
import GenerateDay from '../generate-day/generate-day';
// Functions
import {showDate} from '../../../utils/dates.js';


const useStyle = makeStyles((theme) => ({
  section: {
    display: `flex`,
    flexDirection: `column`,
    alignItems: `flex-start`,
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

  const generateDateCard = (date) => (
    <div className={classes.card}>
      <div className={classes.days}>
        {
          date.slice(0, 2).map((day, i) => <div key={i}>{GenerateDay(day)}</div>)
        }
      </div>
      <span className={classes.dot}>.</span>

      <div className={classes.days}>
        {
          date.slice(3, 5).map((day, i) => <div key={`${day} + ${i}`}>{GenerateDay(day)}</div>)
        }
      </div>
      <span className={classes.dot}>.</span>
      <div className={classes.year}>
        {
          date.slice(6).map((day, i) => <div key={`${day} + ${i}`}>{GenerateDay(day)}</div>)
        }
      </div>
    </div>
  );
  

  return (
    <div className={classes.section}>
      <div className={classes.cards}>
        {
          generateDateCard([...new Array(10)].map(() => null))
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