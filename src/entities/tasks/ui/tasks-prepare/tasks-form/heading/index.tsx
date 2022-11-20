import { FC, memo } from 'react';
// MUI Stuff
import { TextAlign, Theme } from 'app/providers/theme';
import { useTheme } from '@emotion/react';
import { Box } from '@mui/material';


const useStyles = ((theme: Theme) => ({
  root: {
    color      : theme.palette.primary.dark,
    textShadow : `0 0 2px ${theme.palette.primary.bright}`,
    fontWeight : 300,
    fontSize   : '22px',
    textAlign  : TextAlign.CENTER,
    mt         : 2,
    mb         : 1
  }
}));


type Props = {
  title: string
}

export const TasksFormHeading: FC<Props> = memo(({ title }) => {
  const sx = useStyles(useTheme() as Theme);
  
  return (
    <Box sx={sx.root}>{title}</Box>
  );
});
