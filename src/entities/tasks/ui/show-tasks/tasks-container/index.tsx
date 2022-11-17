import { FC } from 'react';
// MUI Stuff
import { Box } from '@mui/material';
// Components
import TaskContainer from '../task';
import { Tasks } from '../../../model';



const useStyles = (() => ({
  root: {
    display: `flex`,
    height: `max-content`,
    flexWrap: `wrap`,
    justifyContent: `flex-start`,
    width: `1040px`,
    p: 0.5
  }
}));


type Props = {
  tasks: Tasks
}


/** Рендер карточек */
export const TasksContainer: FC<Props> = ({ tasks }) => {
  const sx = useStyles();

  return (
    <Box sx={sx.root}>
      {
        tasks.map((task, index) => (
          <TaskContainer key={index} task={task} />
        ))
      }
    </Box>
  );
};
