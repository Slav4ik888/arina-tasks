import { FC } from 'react';
// MUI Stuff
import { Box, Button } from '@mui/material';
// Components
import TasksContainerHeader from './tasks-container-header';
import { TasksContainer } from './tasks-container';
// Functions
import { Theme } from 'app/providers/theme';
import { useTheme } from '@emotion/react';
import { Tasks } from '../../model';
import { useNavigate } from 'react-router-dom';
import { RoutePath } from 'app/providers/router';
import { useAppDispatch } from 'shared/lib/hooks';
import { navbarActions } from 'features/navbar';



const useStyles = ((theme: Theme) => ({
  buttons: {
    display: 'flex',
    width: `100%`
  },
  btn: {
    py: 1,
    px: 2,
    my: 4,
    color: theme.palette.secondary.ultradark,
    backgroundColor: theme.palette.secondary.main,
    fontSize: `20px`,
    width: `100%`,
    '&:first-of-type': {
      mr: 1,
      background: '#ccc'
    },
    '&:first-of-type:hover': {
      backgroundColor: theme.palette.secondary.main
    },
    '&:last-child': {
      ml: 1
    }
  }
}));


type Props = {
  tasks        : Tasks
  onClearTasks : () => void
}


const ShowTasks: FC<Props> = ({ tasks, onClearTasks }) => {
  const
    sx = useStyles(useTheme() as Theme),
    dispatch = useAppDispatch(),
    navigate = useNavigate();

  const handlerPrintTasks = () => {
    dispatch(navbarActions.setStatusNavbar(false));
    dispatch(navbarActions.setStatusFooter(false));
    navigate(RoutePath.PRINT_TASKS);
  };

  return (
    <>
      <TasksContainerHeader />
      <TasksContainer tasks={tasks} />

      <Box sx={sx.buttons}>
        <Button
          variant = 'contained'
          color   = 'secondary'
          sx      = {sx.btn}
          onClick = {onClearTasks}
        >
          Заново
        </Button>

        <Button
          variant = 'contained'
          color   = 'secondary'
          sx      = {sx.btn}
          onClick = {handlerPrintTasks}
        >
          Распечатать
        </Button>
      </Box>
    </>
  );
};

export default ShowTasks;
