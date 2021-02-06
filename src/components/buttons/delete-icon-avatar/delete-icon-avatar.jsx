import React, {useState} from 'react';
import pt from 'prop-types';
import cl from 'classnames';
// MUI Stuff
import { makeStyles } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
// Icons
import Delete from '@material-ui/icons/Delete';
// Components
import Confirm from '../../confirm/confirm';
import { typeConfirm, typeElem } from '../../../services/types';


const useStyles = makeStyles((theme) => ({
  doc: {
    position: `absolute`,
    top: 8,
    right: 55,
  },
  question: {
    position: `absolute`,
    top: 9,
    right: 5,
  },
  answer: {
    position: `absolute`,
    top: 9,
    right: 65,
    // width: `20px`,
    // height: `20px`, 
  },
}));


const DeleteIconAvatar = ({ type, onDel }) => {
  const classes = useStyles();

  let titleConfirm = ``;
  let titleTooltip = ``;

  switch (type) {
    case typeElem.TODOS:
      titleConfirm = `Вы действительно хотите удалить это мероприятие без возможности восстановления?`;
      titleTooltip = `Удалить это мероприятие`;
      break;
    
    default: break;
  }

  const [isOpen, setIsOpen] = useState(false);

  const handleOk = () => {
    setIsOpen(false);
    onDel();
  };

  const handleClose = () => setIsOpen(false);

  const handleOpenConfirm = () => setIsOpen(true);
  

  return (
    <>
      <Tooltip title={titleTooltip} placement="bottom" arrow enterDelay={1000} enterNextDelay={1000}>
        <IconButton aria-label="Delete" onClick={handleOpenConfirm} className={cl(
          { [classes.doc]: type === typeElem.TODOS },
          { [classes.doc]: type === typeElem.DOC },
          { [classes.question]: type === typeElem.QUESTION },
          { [classes.answer]: type === typeElem.ANSWER },
        )}>
          <Delete />
        </IconButton>
      </Tooltip>

      <Confirm
        typeOk={typeConfirm.DEL}
        open={isOpen}
        onOk={handleOk}
        onCancel={handleClose}
        title={titleConfirm}
      />

    </>
  )
};

DeleteIconAvatar.propTypes = {
  type: pt.oneOf([typeElem.TODOS, typeElem.DOC, typeElem.POS, typeElem.EMPLOYEE, typeElem.QUESTION, typeElem.ANSWER]).isRequired,
  onDel: pt.func.isRequired,
};

export default DeleteIconAvatar;
