import * as React from 'react';
import { RoutePath } from 'app/providers/router';
import { useNavigate } from 'react-router-dom';
// MUI Stuff
import { Button, Box } from '@mui/material';
// Types & Styles
import { fcc, FlexDirection } from 'app/providers/theme';



const useStyles = () => ({
  root: {
    display         : `flex`,
    flexDirection   : FlexDirection.COLUMN,
    margin          : `0 auto`,
    height          : `100%`
  },
  text: {
    ...fcc,
    height    : `50vh`,
    fontSize  : `1.8rem`,
    fontStyle : `italic`
  },
  btn: {
    my: 2
  }
});


export const NotFoundPage: React.FC = () => {
  const
    sx          = useStyles(),
    nav         = useNavigate(),
    handleClick = () => nav(RoutePath.ROOT);

  return (
    <Box sx={sx.root}>
      <Box sx={sx.text}>
        Извините, запрошенная страница не найдена...
      </Box>
      <Button sx={sx.btn} variant="contained" onClick={handleClick}>
        Перейти на главную
      </Button>
    </Box>
  );
};
