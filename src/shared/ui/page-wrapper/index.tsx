import { FC, ReactNode } from 'react';
import { Box } from '@mui/material';


type Props = {
  children: ReactNode
}

export const PageWrapper: FC<Props> = ({ children }) => (
  <Box sx={{
      display         : `flex`,
      flexDirection   : `column`,
      margin          : `0 auto`,
      height          : `100%`
    }}
  >
    {
      children
    }
  </Box>
);
