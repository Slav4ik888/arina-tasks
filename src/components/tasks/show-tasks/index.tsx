import { FC } from 'react';
// MUI Stuff
import { Box, Button } from '@mui/material';
// Components
import Task23Arg from '../task23Arg';
import TasksContainerHeader from '../tasks-container-header';
import { Theme } from 'app/providers/theme';
import { Tasks } from 'app/types/types';
import { useTheme } from '@emotion/react';



const useStyles = ((theme: Theme) => ({
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
    py: 1,
    px: 2,
    my: 4,
    color: theme.palette.secondary.ultradark,
    backgroundColor: theme.palette.secondary.main,
    fontSize: `20px`,
    // border: `none`,
  },
}));


type Props = {
  tasks        : Tasks
  onClearTasks : () => void
}


/** Рендер карточек */
const ShowTasks: FC<Props> = ({ tasks, onClearTasks }) => {
  const sx = useStyles(useTheme() as Theme);

  return (
    <>
      <TasksContainerHeader />

      <Box sx={sx.section}>
        {
          tasks.map((task, index) => (
            <Task23Arg key={index} task={task} />
          ))
        }
      </Box>

      <Button
        variant = 'contained'
        color   = 'secondary'
        sx      = {sx.inputBut}
        onClick = {onClearTasks}
      >
        Заново
      </Button>
    </>
  );
};

export default ShowTasks;
