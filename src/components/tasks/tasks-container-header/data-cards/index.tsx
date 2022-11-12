import { FC } from 'react';
// MUI Stuff
import { Box } from '@mui/material';
// Components
import GenerateDay from './generate-day';
// Functions
import { Theme } from 'app/providers/theme';
import { useTheme } from '@emotion/react';
import { FORMAT, formatDate } from 'shared/lib/dates';


const useStyles = ((theme: Theme) => ({
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
  year: {
    display: `flex`,
    flexWrap: `wrap`, 
    marginLeft: `7px`
  },
  days: {
    display: `flex`,
    flexWrap: `wrap`, 
    marginLeft: `7px`
  },
  dot: {
  }
}));


const today = formatDate(new Date().getTime(), FORMAT.DDMMYYYYt).split(``);


type Props = {
  date: string[]
}

const DateCards: FC<Props> = ({ date }) => {
  const
    sx = useStyles(useTheme() as Theme),
    dot = <Box component='span' sx={sx.dot}>.</Box>;

  return (
    <Box sx={sx.card}>
      <Box sx={sx.days}>
        {
          date
            .slice(0, 2)
            .map((day, i) => <GenerateDay key={i} day={day} />)
        }
      </Box>
      {dot}

      <Box sx={sx.days}>
        {
          date
            .slice(3, 5)
            .map((day, i) => <GenerateDay key={`${day} + ${i}`} day={day} />)
        }
      </Box>
      {dot}

      <Box sx={sx.year}>
        {
          date
            .slice(6)
            .map((day, i) => <GenerateDay key={`${day} + ${i}`} day={day} />)
        }
      </Box>
    </Box>
  );
}

export default DateCards;
