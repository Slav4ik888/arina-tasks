import {FC, useState} from 'react';
// MUI Stuff
import { IconButton } from '@mui/material';
// Icons
import Delete from '@mui/icons-material/Delete';
// Components
import DialogConfirm from 'shared/ui/dialog-confirm';
import { Tooltip } from 'shared/ui';
// Functions
import { TodoElement } from 'features/schedule';
import { ConfirmType } from 'app/types';



const useStyles = (() => ({
  doc: {
    position: `absolute`,
    top: 8,
    right: 55
  }
}));


type Props = {
  type  : TodoElement
  onDel : () => void
}

const DeleteIconAvatar: FC<Props> = ({ type, onDel }) => {
  const
    sx = useStyles(),
    [isOpen, setIsOpen] = useState(false);

  const handlerOk = () => {
    setIsOpen(false);
    onDel();
  };

  const handlerClose = () => setIsOpen(false);
  const handlerOpenConfirm = () => setIsOpen(true);


  let titleConfirm = '', titleTooltip = '', style = {};

  switch (type) {
    case TodoElement.TODOS:
      titleConfirm = 'Вы действительно хотите удалить это мероприятие без возможности восстановления?';
      titleTooltip = 'Удалить это мероприятие';
      style        = { ...sx.doc };
      break;
    
    default: break;
  }

    

  return (
    <>
      <Tooltip title={titleTooltip}>
        <IconButton aria-label='Delete' sx={style} onClick={handlerOpenConfirm}>
          <Delete />
        </IconButton>
      </Tooltip>

      <DialogConfirm
        typeOk   = {ConfirmType.DEL}
        open     = {isOpen}
        onOk     = {handlerOk}
        onCancel = {handlerClose}
        title    = {titleConfirm}
      />
    </>
  )
};

export default DeleteIconAvatar;
