import { Box, InputBase } from '@mui/material';
import { FC, useState } from 'react';
// MUI Stuff
import { BaseField, Tooltip } from 'shared/ui';


const getOneDigit = (value: number): number => {
  let v = String(value);
  if (v.length > 1) return Number(v.slice(0, v.length - 1));
  else if (v.length < 1) return undefined
  return Number(v);
};

type Props = {
  day: string
}

const GenerateDay: FC<Props> = ({ day: _day }) => {
  const
    [isChange, setIsChange] = useState(false),
    handlerSetIsChangeOn    = () => _day && setIsChange(true), // Value can be changes, if _day is not be null
    handlerSetIsChangeOff   = () => setIsChange(false);

  const [day, setDay] = useState<number>(_day ? Number(_day) : undefined);
  

  const handlerEdit = (value: number, key: string) => {
    if (key === 'Enter' || key === 'Escape') handlerUpdateDay();
    
    if (value >= 0 && value < 10) setDay(value);
    else setDay(value < 0 || value > 9 ? day : value);
  };

  const handlerUpdateDay = () => handlerSetIsChangeOff();


  return (
    <Tooltip title='Нажмите чтобы изменить значение'>
      <BaseField
        value       = {day}
        isOpenInput = {isChange}
        onChange    = {handlerEdit}
        onBlur      = {handlerUpdateDay}
        onClick     = {handlerSetIsChangeOn}
      />
    </Tooltip>
  );
};

export default GenerateDay;
