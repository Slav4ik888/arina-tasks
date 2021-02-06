import React, {useState} from 'react';
import pt from 'prop-types';
// MUI Stuff
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Tooltip from '@material-ui/core/Tooltip';
import InputBase from '@material-ui/core/InputBase';
// Icons
import EmojiNatureIcon from '@material-ui/icons/EmojiNature';
// Components
import DeleteIconAvatar from '../../buttons/delete-icon-avatar/delete-icon-avatar';
import { typeElem } from '../../../services/types';


const useStyles = makeStyles((theme) => ({
  hover: {
    transition: `transform 0.2s`,
    backgroundColor: theme.palette.background.hover,
    borderRadius: `5px`,
  },
  avatar: {
    backgroundColor: theme.palette.primary.main,
  },
  input: {
    width: `calc(100% - 100px)`,
    flex: 1,
    padding: theme.spacing(1, 3, 1, 3),
  },
}));

const TodoItem = ({ todo, onEdit, onDel, error, onClearError, onSetError }) => {
  const classes = useStyles();

  const { title, id } = todo;
  const [showIcons, setShowIcons] = useState(false);
  const handlePointerEnter = () => setShowIcons(true);
  const handlePointerLeave = () => {
    setShowIcons(false);
    if (title !== newTitle) {
      handleBlur();
    }
  };
  const hover = showIcons ? classes.hover : ``;

  const [newTitle, setNewTitle] = useState(title);

  const handleEdit = (e) => {
    if (e.keyCode === 13 || e.keyCode === 27) {
      e.target.blur();
      if (title !== newTitle) {
        onEdit({ id, title: newTitle });
      }
    }
  
    const value = e.target.value;
    if (value.length < 20) { // Проверка на длину слова
      if (error.general) {
        onClearError();
      }
      setNewTitle(value);
    } else {
      onSetError({ general: `Длина строки должна быть меньше 20 символов` });
    }
  };

  const handleBlur = () => {
    if (title !== newTitle) {
      onEdit({ id, title: newTitle });
    }
  };

  const handleDelTodo = () => onDel(todo);

  return (
    <ListItem
      onMouseEnter={handlePointerEnter}
      onMouseLeave={handlePointerLeave}
      className={hover}
    >
      <ListItemAvatar>
        <Avatar className={classes.avatar}>
          <EmojiNatureIcon />
        </Avatar>
      </ListItemAvatar>

      <Tooltip title="Нажмите для редактирования" placement="top" arrow enterDelay={1000} enterNextDelay={1000}>
        <InputBase
          className={classes.input}
          inputProps={{ 'aria-label': 'Мероприятие' }}
          value={newTitle}
          type="text"
          placeholder="Введите название мероприятия"
          onChange={handleEdit}
          onBlur={handleBlur}
          onKeyDown={handleEdit}
        />
      </Tooltip>
      
      {
        showIcons && <DeleteIconAvatar type={typeElem.TODOS} onDel={handleDelTodo} />
      }

    </ListItem>
  );
}

TodoItem.propTypes = {
  todo: pt.object.isRequired,
  onEdit: pt.func.isRequired,
  onDel: pt.func.isRequired,
  error: pt.object.isRequired,
  onSetError: pt.func.isRequired,
  onClearError: pt.func.isRequired, 
};

export default TodoItem;

