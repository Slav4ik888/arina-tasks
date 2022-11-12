import { FC } from 'react';
// MUI Stuff
import { useTheme } from '@emotion/react';
import { lighten, Toolbar, Typography } from '@mui/material';
import { Theme } from 'app/providers/theme/config';



const useStyles = ((theme: Theme, numSelected: number) => ({
  root: {
    px: 2
  },
  highlight: numSelected > 0
    ? {
      color: theme.palette.secondary.main,
      backgroundColor: lighten(theme.palette.secondary.light, 0.85),
    }
    : {
      color: 'inherit',
      backgroundColor:'inherit' 
    },
      // : {
      //     color: theme.palette.text.primary,
      //     backgroundColor: theme.palette.secondary.dark,
      // },
  title: {
    flex: '1 1 100%',
  },
}));


type Props = {
  numSelected: number
}


const EnhancedTableToolbar: FC<Props> = ({ numSelected }) => {
  const sx = useStyles(useTheme() as Theme, numSelected);

  return (
    <Toolbar sx={{ ...sx.root, ...sx.highlight }}>
      {numSelected > 0 ? (
        <Typography sx={sx.title} color="inherit" variant="subtitle1" component="div">
          {numSelected} выбрано
        </Typography>
      ) : (
        <Typography sx={sx.title} variant="h6" id="tableTitle" component="div">
          Расписание
        </Typography>
      )}

      {/* {numSelected > 0 ? (
        <Tooltip title="Delete">
          <IconButton aria-label="delete">
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      ) : (
        <Tooltip title="Filter list">
          <IconButton aria-label="filter list">
            <FilterListIcon />
          </IconButton>
        </Tooltip>
      )} */}
    </Toolbar>
  );
};

export default EnhancedTableToolbar;
