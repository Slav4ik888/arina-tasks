import * as React from 'react';
// MUI Stuff 
import { Tooltip as MuiTooltip, TooltipProps } from '@mui/material';



type Props = {
  title?          : string;
  enterDelay?     : number; 
  enterNextDelay? : number;
  placement?      : TooltipProps["placement"];
  children        : JSX.Element;
};


export const Tooltip: React.FC<Props> = ({
  title          = '',
  placement      = "bottom",
  enterDelay     = 1000, 
  enterNextDelay = 1000,
  children
}) => {

  return (
    <MuiTooltip
      arrow
      title          = {title}
      placement      = {placement}
      enterDelay     = {enterDelay}
      enterNextDelay = {enterNextDelay}
    >
      <span>
        {children}
      </span>
    </MuiTooltip>
  )
};
