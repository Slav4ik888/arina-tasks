import { useState, useEffect, FC } from 'react';
// MUI Stuff
import { TextAlign, Theme } from 'app/providers/theme';
import { useTheme } from '@emotion/react';
import { Box, Popover, Typography } from '@mui/material';
import { TaskError, TaskType } from '../model';


const useStyles = ((theme: Theme) => ({
  container: {
    display: `flex`,
    flexDirection: `column`,
    alignItems: `center`,
    width: `100%`,
    my: 2
  },
  title: {
    width: `100%`,
    pt: 1,
    pb: 2,
    color: theme.palette.primary.contrastText,
    fontSize: `22px`
  },
  tasks: {
    display: `flex`,
    flexDirection: `row`,
    alignItems: `center`,
    justifyContent: `space-between`
  },
  inputMaxMin: {
    width: `80px`,
    height: `50px`,
    color: theme.palette.secondary.ultradark,
    mx: 2,
    fontSize: `24px`,
    textAlign: TextAlign.CENTER
  },
  error: {
    p: 4
  }
}));


type Props = {
  taskType     : TaskType
  title        : string
  qual         : number
  min          : number
  max          : number
  error        : TaskError
  onChangeQual : (e: React.ChangeEvent<HTMLInputElement>) => void
  onChangeMin  : (e: React.ChangeEvent<HTMLInputElement>) => void
  onChangeMax  : (e: React.ChangeEvent<HTMLInputElement>) => void
  onClearError : () => void
}


const TasksFormElem: FC<Props> = ({ taskType, title, qual, min, max, error, onChangeQual, onChangeMin, onChangeMax, onClearError }) => {
  const
    sx = useStyles(useTheme() as Theme),
    [anchorEl, setAnchorEl] = useState(null);

  useEffect(() => {
    if (error?.taskType === taskType) {
      setAnchorEl(error?.anchorEl);
    }
  }, [error]);

  const handleClose = () => {
    onClearError();
    setAnchorEl(null);
  };
  
  
  return (
    <Box sx={sx.container}>
      <Box sx={sx.title}>{title}</Box>
      <Box sx={sx.tasks}>
        <label>Кол-во примеров
          <input
            type     = "number"
            style    = {{ ...sx.inputMaxMin }}
            value    = {qual}
            onChange = {onChangeQual}
          />
        </label>

        <label>Числа от
          <input
            type     = "number"
            style    = {{ ...sx.inputMaxMin }}
            value    = {min}
            onChange = {onChangeMin}
          />
        </label>

        <label>До
          <input
            type     = "number"
            style    = {{ ...sx.inputMaxMin }}
            value    = {max}
            onChange = {onChangeMax}
          />
        </label>
      </Box>

      <Popover 
        open         = {Boolean(anchorEl)}
        anchorEl     = {anchorEl}
        onClose      = {handleClose}
        anchorOrigin = {{
          vertical   : 'top',
          horizontal : 'left'
        }}
        transformOrigin={{
          vertical   : 'center',
          horizontal : 'left'
        }}
      >
        <Typography sx={sx.error}>
          {error?.message}
        </Typography>
      </Popover>
    </Box>
  );
};

export default TasksFormElem;
