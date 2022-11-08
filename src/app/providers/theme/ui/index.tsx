import { createTheme, ThemeOptions } from '@mui/material';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import { FC, ReactNode } from 'react';
import { theme as themeFile } from '../config';


const theme = createTheme(themeFile as ThemeOptions);

type Props = {
  children: ReactNode
};

export const ThemeProvider: FC<Props> = ({ children }) => (
  <MuiThemeProvider theme={theme}>
    { children }
  </MuiThemeProvider>
);
