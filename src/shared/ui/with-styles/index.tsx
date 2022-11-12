import { FC } from 'react';

// Временно не работает... не получилось
export const withStyles = (func: Function) => {
  
  return (Component: FC): FC =>
    // @ts-ignore
    <Component sx={{ ...func() }} />
}
