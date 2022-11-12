import { withZero } from '../../index.js';


export const getDDMMYYdHHMM = (date, sub) => {
  const day   = withZero(date.getDate());
  const month = withZero(date.getMonth() + 1);
  const year  = date.getFullYear().toString().slice(-2);
  const hours = withZero(date.getHours());
  const mins  = withZero(date.getMinutes());
  
  return `${day}.${month}.${year} ${hours}:${mins}` // `DD.MM.YY HH:MM`
};
