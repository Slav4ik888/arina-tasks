import React, { useState, useEffect } from 'react';
// MUI Stuff
import { makeStyles } from '@material-ui/core/styles';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';

const useStyle = makeStyles((theme) => ({
  container: {
    display: `flex`,
    flexDirection: `column`,
    alignItems: `center`,
    width: `100%`,
    margin: theme.spacing(2, 0),
  },
  title: {
    width: `100%`,
    padding: theme.spacing(1, 0, 2, 0),
    color: theme.palette.primary.contrastText,
    fontSize: `22px`,
  },
  tasks: {
    display: `flex`,
    flexDirection: `row`,
    alignItems: `center`,
    justifyContent: `space-between`,
  },
  inputMaxMin: {
    width: `80px`,
    height: `50px`,
    color: theme.palette.secondary.ultradark,
    margin: theme.spacing(0, 2),
    fontSize: `24px`,
    textAlign: `center`,
  },
  error: {
    padding: theme.spacing(4),
  },
}));


const TasksFormElem = ({ id, title, qual, min, max, onChangeQual, onChangeMin, onChangeMax, error, onClearError }) => {
  const classes = useStyle();

  const [anchorEl, setAnchorEl] = useState(null);

  useEffect(() => {
    if (error.id === id) {
      setAnchorEl(error.anchorEl);
    }
  }, [error]);

  const handleClose = () => {
    onClearError();
    setAnchorEl(null);
  };
  
  
  return (
    <div className={classes.container}>
      <div className={classes.title}>{title}</div>
      <div className={classes.tasks}>
        <label>Кол-во примеров
          <input type="number" className={classes.inputMaxMin}
            value={qual}
            onChange={onChangeQual}
          />
        </label>

        <label>Числа от
          <input type="number" className={classes.inputMaxMin}
            value={min}
            onChange={onChangeMin}
          />
        </label>

        <label>До
          <input type="number" className={classes.inputMaxMin}
            value={max}
            onChange={onChangeMax}
          />
        </label>
      </div>

      <Popover 
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'center',
          horizontal: 'left',
        }}
      >
        <Typography className={classes.error}>
          {error.message}
        </Typography>
      </Popover>
    </div>
  );
};

export default TasksFormElem;