import {ChangeEvent, FC, KeyboardEvent, useState} from 'react';
// Redux
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks';
import { TodoListItem, scheduleActions as actions, selectScheduleError, TodoElement } from 'features/schedule';
// MUI
import { Avatar, InputBase, ListItem, ListItemAvatar } from '@mui/material';
// Icons
import EmojiNatureIcon from '@mui/icons-material/EmojiNature';
// Components
import { Tooltip } from 'shared/ui';
import DeleteIconAvatar from '../../buttons/delete-icon-avatar';
// Functions
import { Theme } from 'app/providers/theme';
import { useTheme } from '@emotion/react';



const useStyles = ((theme: Theme) => ({
  hover: {
    transition: `transform 0.2s`,
    backgroundColor: theme.palette.background.hover,
    borderRadius: `5px`
  },
  avatar: {
    backgroundColor: theme.palette.primary.main
  },
  input: {
    width: `calc(100% - 100px)`,
    flex: 1,
    py: 1,
    px: 3
  }
}));


type Props = {
  todoListItem : TodoListItem
  onEdit       : (todo: TodoListItem) => void
  onDel        : (todo: TodoListItem) => void
}


const TodoItem: FC<Props> = ({ todoListItem, onEdit, onDel }) => {
  const
    sx = useStyles(useTheme() as Theme),
    dispatch = useAppDispatch(),
    error = useSelector(selectScheduleError),
    { title, id } = todoListItem,
    [showIcons, setShowIcons] = useState(false),
    hover = showIcons && sx.hover,
    [newTitle, setNewTitle] = useState(title);
  
  
  const handlePointerEnter = () => setShowIcons(true);
  const handlePointerLeave = () => {
    setShowIcons(false);
    if (title !== newTitle) {
      handleBlur();
    }
  };


  const handleEdit = (e: ChangeEvent<HTMLInputElement>) => {
    if ((e as unknown as KeyboardEvent<HTMLInputElement>).keyCode === 13
      || (e as unknown as KeyboardEvent<HTMLInputElement>).keyCode === 27) {
      e.target.blur();

      if (title !== newTitle) onEdit({ id, title: newTitle });
    }
  
    const value = e.target.value;
    if (value.length < 20) { // Проверка на длину слова
      if (error.general) dispatch(actions.clearError());
      setNewTitle(value);
    }
    else dispatch(actions.setError({ general: `Длина строки должна быть меньше 20 символов` }));
  };

  const handleBlur = () => title !== newTitle && onEdit({ id, title: newTitle });
  const handleDelTodo = () => onDel(todoListItem);


  return (
    <ListItem
      onMouseEnter={handlePointerEnter}
      onMouseLeave={handlePointerLeave}
      sx={hover}
    >
      <ListItemAvatar>
        <Avatar sx={sx.avatar}>
          <EmojiNatureIcon />
        </Avatar>
      </ListItemAvatar>

      <Tooltip title='Нажмите для редактирования'>
        <InputBase
          sx          = {sx.input}
          inputProps  = {{ 'aria-label': 'Мероприятие' }}
          value       = {newTitle}
          type        = 'text'
          placeholder = 'Введите название мероприятия'
          onChange    = {handleEdit}
          onBlur      = {handleBlur}
          // @ts-ignore
          onKeyDown   = {handleEdit}
        />
      </Tooltip>
      {
        showIcons && <DeleteIconAvatar type={TodoElement.TODOS} onDel={handleDelTodo} />
      }
    </ListItem>
  );
}

export default TodoItem;
