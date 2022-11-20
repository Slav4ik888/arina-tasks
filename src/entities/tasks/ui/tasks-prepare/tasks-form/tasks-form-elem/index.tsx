import { useState, useEffect, ChangeEvent, FC } from 'react';
// MUI Stuff
import { TextAlign, Theme } from 'app/providers/theme';
import { useTheme } from '@emotion/react';
import { Box, Popover, Typography } from '@mui/material';
import { TaskFormError, TaskType } from '../../../../model';
import { FormInput } from './form-input';


const useStyles = ((theme: Theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    my: 2
  },
  title: {
    color: theme.palette.primary.contrastText,
    fontSize: '20px',
    my: 1
  },
  description: {
    color: theme.palette.primary.contrastText,
    fontSize: '18px',
    fontStyle: 'Italic',
    my: 1
  },
  tasks: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  error: {
    p: 4
  }
}));


type Props = {
  taskType       : TaskType
  title          : string
  description    : string
  amount         : number
  min            : number
  max            : number
  error          : TaskFormError
  onChangeAmount : (e: ChangeEvent<HTMLInputElement>) => void
  onChangeMin    : (e: ChangeEvent<HTMLInputElement>) => void
  onChangeMax    : (e: ChangeEvent<HTMLInputElement>) => void
  onClearError   : () => void
}


const TasksFormElem: FC<Props> = (props) => {
  const
    {
      taskType, title, description, amount, min, max, error,
      onChangeAmount, onChangeMin, onChangeMax, onClearError
    } = props,
    sx = useStyles(useTheme() as Theme),
    [anchorEl, setAnchorEl] = useState(null);

  
  useEffect(() => {
    error?.taskType === taskType && setAnchorEl(error?.anchorEl);
  }, [error]);


  const handleClose = () => {
    onClearError();
    setAnchorEl(null);
  };
  
  
  return (
    <Box sx={sx.container}>
      <Box sx={sx.title}>{title}</Box>
      <Box sx={sx.description}>{description}</Box>
      <Box sx={sx.tasks}>
        <FormInput
          label    = 'Кол-во примеров'
          value    = {amount}
          width    = {45}
          onChange = {onChangeAmount}
        />
        <FormInput
          label    = 'Числа от'
          value    = {min}
          width    = {27}
          onChange = {onChangeMin}
        />
        <FormInput
          label    = 'До'
          value    = {max}
          width    = {27}
          onChange = {onChangeMax}
        />
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
