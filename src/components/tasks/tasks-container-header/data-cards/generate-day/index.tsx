import { Box, InputBase } from '@mui/material';
import { FC, useState } from 'react';
// MUI Stuff
import { Tooltip } from 'shared/ui';


const useStyles = (() => ({
  day: {
    width: `35px`,
    height: `50px`,
    backgroundColor: `#fdfdfd`,
    border: `1px dotted rgb(146, 146, 146)`,
    textAlign: `center`,
    alignItems: `center`,
    fontSize: `50px`,
    lineHeight: `50px`,
  },
  dayInput: {
    width: `55px`,
  },
}));


type Props = {
  day: string
}

const GenerateDay: FC<Props> = ({ day: _day }) => {
  const
    sx = useStyles(),
    [isChange, setIsChange] = useState(false),
    handlerSetIsChangeOn    = () => setIsChange(true),
    handlerSetIsChangeOff   = () => setIsChange(false),

    [day, setDay] = useState(_day);
  
  
  const handlerEdit = (e: any) => {
    if (e.keyCode === 13 || e.keyCode === 27) {
      e.target.blur();
      handlerUpdateDay();
    }
    if (e.target.value >= 0 && e.target.value < 10) {
      console.log('setDay: ', e.target.value);
      setDay(e.target.value);
    }
    else {
      setDay(null);
    }
  };

  const handlerUpdateDay = () => handlerSetIsChangeOff();


  return (
    <Tooltip title='Нажмите чтобы изменить значение'>
      <Box sx={sx.day} onClick={handlerSetIsChangeOn}>
        {
          !isChange ? day
            : <InputBase
              type      = 'number'
              value     = {day}
              sx        = {{ ...sx.day, ...sx.dayInput }}
              onChange  = {handlerEdit}
              onBlur    = {handlerUpdateDay}
              onKeyDown = {handlerEdit}
            />
        }
      </Box>
    </Tooltip>
  );
};

export default GenerateDay;
