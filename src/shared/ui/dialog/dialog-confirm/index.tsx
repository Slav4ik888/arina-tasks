import * as React from 'react';
// MUI Stuff
import { Button, Dialog, DialogTitle, DialogActions } from '@mui/material/';
// Components
// Styles
import { useTheme } from '@emotion/react';
import { Theme } from 'app/providers/theme';
import { ConfirmType } from 'app/types';


const useStyles = (theme: Theme, typeOk: ConfirmType) => {
  const
    exit    = typeOk === ConfirmType.SAVE_EXIT,
    confirm = typeOk === ConfirmType.CONFIRM;

  return {
    root: {
      p: 2,
      '& .MuiPaper-root': {
        margin: { xs: 0 },
        padding: { xs: 0 }
      }
    },
    cancel: {
      mr: 2,
      fontSize: `0.8rem`,
      backgroundColor : () => exit || confirm ? `` : theme.palette.primary.light,
      color           : () => exit || confirm ? theme.palette.secondary.main : ``
    },
    ok: {
      fontSize: `0.8rem`,
      backgroundColor : () => exit || confirm ? theme.palette.primary.light : ``,
      color           : () => exit || confirm ? `` : theme.palette.secondary.main
    }
  }
};


type Props = {
  typeOk   : ConfirmType;
  open     : boolean;
  title    : string;
  onOk     : () => void;
  onCancel : () => void;
};


export const DialogConfirm: React.FC<Props> = ({ open, typeOk, title, onOk, onCancel }) => {
  const
    sx            = useStyles(useTheme() as Theme, typeOk),
    exit          = typeOk === ConfirmType.SAVE_EXIT,
    confirm       = typeOk === ConfirmType.CONFIRM,

    cancelLabel   = exit                      ? `Выйти без сохранения` : `Отменить`,
    variantOk     = exit || confirm           ? "contained"            : "outlined",
    variantCancel = variantOk === "contained" ? "outlined"             : "contained";

  
  return (
    <Dialog open={open} maxWidth="sm" sx={sx.root} onClose={onCancel}>
      <DialogTitle sx={{ p: { xs: 2, sm: 4 }} }>
        {title}
      </DialogTitle>

      <DialogActions sx={{ p: { xs: 2, sm: 4 } }}>
        {
          typeOk !== ConfirmType.NO_QUESTIONS &&
            <Button
              variant   = {variantCancel}
              sx        = {sx.cancel}
              onClick   = {onCancel}
            >
              {cancelLabel}
            </Button>
        }
        <Button
          variant   = {variantOk}
          sx        = {sx.ok}
          onClick   = {onOk}
        >
          {typeOk}
        </Button>
      </DialogActions>
    </Dialog>
  )
};
