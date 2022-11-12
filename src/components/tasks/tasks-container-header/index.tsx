// MUI Stuff
import { Box } from '@mui/material';
// Components
import DateCards from './data-cards';
// Functions
import { Theme } from 'app/providers/theme';
import { useTheme } from '@emotion/react';
import { FORMAT, formatDate } from 'shared/lib/dates';


const today = formatDate(new Date().getTime(), FORMAT.DDMMYYYYt).split(``);


const useStyles = ((theme: Theme) => ({
  section: {
    display: `flex`,
    flexDirection: `column`,
    alignItems: `flex-start`,
    width: `100%`
  },
  cards: {
    display: `flex`,
    flexDirection: `row`
  },
  card: {
    display: `flex`,
    flexWrap: `wrap`, 
    justifyContent: `flex-end`,
    p: 1,
    mr: 1.25,
    mt: 1.25,
    fontSize: `40px`,
    backgroundColor: theme.palette.primary.ultralight,
    border: `1px solid rgb(192, 192, 192)`
  },
  line: {
    width: `100%`,
    borderTop: `2px solid rgb(92, 92, 92)`,
    marginBottom: `5px`
  }
}));


/** Шапка с датой */
const TasksContainerHeader = () => {
  const sx = useStyles(useTheme() as Theme);

  return (
    <Box sx={sx.section}>
      <Box sx={sx.cards}>
        <DateCards date={([...new Array(10)].map(() => null))} />
        <DateCards date={today} />
      </Box>
      <Box sx={sx.line}></Box>
    </Box>
  );
}

export default TasksContainerHeader;
