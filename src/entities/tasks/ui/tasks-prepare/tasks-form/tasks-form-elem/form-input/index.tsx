import { ChangeEvent, FC } from 'react';
// MUI Stuff
import { TextAlign, Theme } from 'app/providers/theme';
import { useTheme } from '@emotion/react';
import s from './index.module.scss';



const useStyles = ((theme: Theme) => ({
  input: {
    width     : '80px',
    height    : '50px',
    color     : theme.palette.secondary.ultradark,
    fontSize  : '24px',
    textAlign : TextAlign.CENTER,
    margin    : '0 16px'
  }
}));


type Props = {
  label    : string
  value    : number
  width    : number
  onChange : (e: ChangeEvent<HTMLInputElement>) => void
}


export const FormInput: FC<Props> = ({ label, value, width, onChange }) => {
  const
    sx = useStyles(useTheme() as Theme);
  
  
  return (
    <label
      className={s.label}
      style={{ width: `${width}%`}}
    >
      {label}
      <input
        type     = "number"
        style    = {{ ...sx.input }}
        value    = {value}
        onChange = {onChange}
      />
    </label>
  );
};
