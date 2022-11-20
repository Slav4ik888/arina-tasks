import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { RoutePath } from 'app/providers/router';
// Redux
import { useAppDispatch } from 'shared/lib/hooks';
import { navbarActions } from 'features/navbar';
// MUI Stuff
import { Box } from '@mui/material';
// Components
import { Button, ButtonTheme } from 'shared/ui';



const useStyles = (() => ({
  buttons: {
    display: 'flex',
    width: `100%`
  },
  btn: {
    '&:first-of-type': {
      mr: 1
    },
    '&:last-child': {
      ml: 1
    }
  }
}));


type Props = {
  onClearTasks : () => void
}


export const ControlPanel: FC<Props> = ({ onClearTasks }) => {
  const
    sx = useStyles(),
    dispatch = useAppDispatch(),
    navigate = useNavigate();

  const handlerPrintTasks = () => {
    dispatch(navbarActions.setStatusNavbar(false));
    dispatch(navbarActions.setStatusFooter(false));
    navigate(RoutePath.PRINT_TASKS);
  };

  return (
    <Box sx={sx.buttons}>
      <Button
        text    = 'Заново'
        sx      = {sx.btn}
        onClick = {onClearTasks}
      />

      <Button
        text    = 'Распечатать'
        theme   = {ButtonTheme.SECONDARY}
        sx      = {sx.btn}
        onClick = {handlerPrintTasks}
      />
    </Box>
  );
};
