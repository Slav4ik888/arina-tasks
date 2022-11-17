import { FC, memo, ReactNode } from 'react';
// MUI Stuff
import { Theme } from 'app/providers/theme';
import { useTheme } from '@emotion/react';
import { AppBar, Toolbar } from '@mui/material';
import { useSelector } from 'react-redux';
import { selectStatusFooter } from 'features/navbar';


const useStyle = (theme: Theme) => ({
  appBar: {
    top: 'auto',
    bottom: 0,
    height: `max-content`,
    position: `relative`,
    backgroundColor: `#565656`, // theme.palette.primary.main,
  },
  container: {
    display: `flex`,
    alignItems: `center`,
    justifyContent: `center`,
    width: `100%`,
    height: `64px`,
    color: theme.palette.secondary.dark,
    backgroundColor: theme.palette.primary.light,
    fontStyle: `italic`,
  },
});



export const Footer: FC = memo(() => {
  const
    sx = useStyle(useTheme() as Theme),
    footer = useSelector(selectStatusFooter);

  if (!footer) return null;

  
  return (
    <AppBar position="static" sx={sx.appBar}>
      <Toolbar sx={sx.container}>
        {`© ${new Date().getFullYear()} Created by Slav4ik888`}
      </Toolbar>
    </AppBar>
  )
});
