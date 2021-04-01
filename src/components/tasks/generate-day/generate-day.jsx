import React, { useState } from 'react';
import cl from 'classnames';
// MUI Stuff
import { makeStyles } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';
import InputBase from '@material-ui/core/InputBase';


const useDayStyles = makeStyles(() => ({
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
  dayInput: {
    width: `55px`,
  },
}));

const GenerateDay = (_day) => {
    
  const classes = useDayStyles();

  const [isChange, setIsChange] = useState(false);
  const handleSetIsChangeOn = () => setIsChange(true);
  const handleSetIsChangeOff = () => setIsChange(false);

  const [day, setDay] = useState(_day);
  const handleEdit = (e) => {
    if (e.keyCode === 13 || e.keyCode === 27) {
      e.target.blur();
      handleUpdateDay();
    }
    if (e.target.value >= 0 && e.target.value < 10) {
      console.log('setDay: ', e.target.value);
      setDay(e.target.value);
    } else {
      setDay(null);
    }
  };

  const handleBlur = () => handleUpdateDay();
  
  const handleUpdateDay = () => handleSetIsChangeOff();

  return (
    <Tooltip title="Нажмите чтобы изменить значение" placement="top" arrow enterDelay={1000} enterNextDelay={1000}>
      <div onClick={handleSetIsChangeOn} className={classes.day}>
        {
          !isChange ? day
            : <InputBase
              className={cl(classes.day, classes.dayInput)}
              value={day}
              type="number"
              onChange={handleEdit}
              onBlur={handleBlur}
              onKeyDown={handleEdit}
            />
        }
      </div>
    </Tooltip>
  );
};


export default GenerateDay;