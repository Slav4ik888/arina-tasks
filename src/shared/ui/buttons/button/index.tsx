import { FC, memo } from 'react';
// MUI Stuff
import { Button as BuiButton } from '@mui/material';
// Components
// Functions
// Types
import { Theme } from 'app/providers/theme';
import { useTheme } from '@emotion/react';



export enum ButtonTheme {
  PRIMARY   = 'primary',
  SECONDARY = 'secondary'
}

interface Options {
  width?: string
}

const useStyles = ((theme: Theme, { width }: Options) => ({
  root: {
    py: 1,
    px: 2,
    my: 4,
    fontSize: '20px',
    width: () => width ? width : '100%',
  },
  primary: {
    color: theme.palette.secondary.ultradark,
    backgroundColor: theme.palette.primary.main
  },
  secondary: {
    color: theme.palette.secondary.ultradark,
    backgroundColor: theme.palette.secondary.main
  },
  fullwidth: {
    width: '100%'
  }
}));


type Props = {
  text       : string
  theme?     : ButtonTheme
  fontSize?  : number
  width?     : string
  sx?        : object
  onClick    : () => void
}


export const Button: FC<Props> = memo((props) => {
  const
    {
      text,
      theme = ButtonTheme.PRIMARY,
      width,
      sx: style = {},
      onClick
    } = props;
  
  const sx = useStyles(useTheme() as Theme, { width });
    
  

  return (
    <BuiButton
      variant = 'contained'
      color   = {theme}
      sx      = {{ ...sx.root, ...sx[theme], ...style }}
      onClick = {onClick}
    >
      {text}
    </BuiButton>
  );
});
