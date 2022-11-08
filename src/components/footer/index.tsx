import { FC, memo, ReactNode } from 'react';
// MUI Stuff
import { Theme } from 'app/providers/theme';
import { useTheme } from '@emotion/react';
import { AppBar, Toolbar } from '@mui/material';


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


type Props = {
  children: ReactNode
}

const Footer: FC = memo(({ children }: Props) => {
  const sx = useStyle(useTheme() as Theme);

  return (
    <AppBar position="static" sx={sx.appBar}>
      <Toolbar sx={sx.container}>
        {children}
      </Toolbar>
    </AppBar>
  )
})

export default Footer;
