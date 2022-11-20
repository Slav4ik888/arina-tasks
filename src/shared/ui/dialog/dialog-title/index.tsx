import * as React from 'react';
// MUI Stuff
import { DialogTitle as MuiDialogTitle, IconButton, Typography, Tooltip } from '@mui/material';
// Icons
import CloseIcon from '@mui/icons-material/Close';
import HelpOutlinedIcon from '@mui/icons-material/InfoOutlined';
import HelpIcon from '@mui/icons-material/Help';
// Styles
import { useTheme } from '@emotion/react';
import { TextAlign, Theme } from 'app/providers/theme';


const useStyles = (theme: Theme) => ({
  root: {
    display: `flex`,
    alignItems: `center`,
    color: theme.palette.primary.contrastText,
    backgroundColor: theme.palette.primary.light,
    minHeight: `62px`,
    boxShadow: `0px 0px 2px 2px #bdbdbd`,
    m: 0, mb: `3px`,
    p: 0,
  },
  title: {
    ml: 2,
    pl: 4,
    textAlign: TextAlign.CENTER,
    width: `100%`, 
    color: '#000'
  },
  icon: {
    color: '#000'
  },
  iconClose: {
    mr: 1,
    color: '#000'
  }
});


enum QuestionIconType {
  HelpOutlined = `HelpOutlined`,
  Help = `Help`,
}


type Props = {
  children?: string;
  question?: string;
  questionIconType?: QuestionIconType;
  onClose: () => void;
}


export const DialogTitle: React.FC<Props> = (props: Props) => {
  const
    { children, question, questionIconType, onClose, ...other } = props,
    sx = useStyles(useTheme() as Theme);

  let helpIcon: JSX.Element;
  switch (questionIconType) {
    case QuestionIconType.Help: helpIcon = <HelpIcon />; break;
    case QuestionIconType.HelpOutlined: helpIcon = <HelpOutlinedIcon />; break;
    default: helpIcon = <HelpIcon />;
  }


  return (
    <MuiDialogTitle
      sx={sx.root}
      {...other}
    >
      <Typography variant="h6" component="div" sx={sx.title}>
        {
          children
        }
      </Typography>
      {
        question ? (
          <Tooltip title={question} placement="bottom" arrow>
            <IconButton aria-label="question" sx={sx.icon}>
              {
                helpIcon
              }
            </IconButton>
          </Tooltip>
        ) : null
      }
      {
        onClose ? (
          <IconButton onClick={onClose} aria-label="close" sx={sx.iconClose}>
            <CloseIcon />
          </IconButton>
        ) : null
      }
    </MuiDialogTitle>
  );
};
