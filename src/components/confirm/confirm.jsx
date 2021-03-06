import React from 'react';
import pt from 'prop-types';
// MUI Stuff
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogActions from '@material-ui/core/DialogActions';
// Components
// Functions
import { typeConfirm } from '../../services/types';


const useStyles = makeStyles((theme) => ({
  dialog: {
    padding: theme.spacing(4),
  },
  button: {
    marginRight: theme.spacing(2),
  }
}));

const Confirm = ({ open, typeOk, onOk, onCancel, title }) => {
  const classes = useStyles();
  
  return (
    <>
      <Dialog
        open={open}
        onClose={onCancel}
        className={classes.dialog}
        maxWidth="xs"
      >
        <DialogTitle className={classes.dialog}>
          {title}
        </DialogTitle>

        <DialogActions className={classes.dialog}>
          {
            typeOk !== typeConfirm.NO_QUESTIONS ?
              <Button variant="contained" color="secondary" onClick={onCancel} className={classes.button}>
                Отменить
              </Button>
              : null
          }
          <Button variant="outlined" onClick={onOk}>
            {typeOk}
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
};

Confirm.propTypes = {
  typeOk: pt.oneOf([typeConfirm.DEL, typeConfirm.SAVE, typeConfirm.WITHOUT_SAVE, typeConfirm.NO_QUESTIONS]).isRequired,
  onOk: pt.func.isRequired,
  onCancel: pt.func.isRequired,
  open: pt.bool.isRequired,
  title: pt.string.isRequired,
}

export default Confirm;
