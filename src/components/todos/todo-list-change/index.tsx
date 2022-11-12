import {useRef, useEffect, FC} from 'react';
// Readux Stuff
import { useAppDispatch } from 'shared/lib/hooks';
import { useSelector } from 'react-redux';
import { scheduleActions as actions, selectScheduleError, selectTodoList, TodoElement } from 'features/schedule';
// MUI Stuff
import { Box, Dialog, DialogContent, Typography } from '@mui/material';
// Component
import DialogTitle from '../../dialog-title';
import TodoItem from '../todo-item';
import ElementAdd from '../../buttons/element-add';
// Functions
import * as LS from 'shared/lib/local-storage'
import { createId } from './utils';
import { Theme } from 'app/providers/theme';
import { useTheme } from '@emotion/react';
import { getArrWithoutItem, updateArrById } from 'shared/lib/arrays';
import { TodoListItem } from 'features/schedule/module';



const useStyles = ((theme: Theme) => ({
  dialog: {
    p: 4
  },
  textField: {
    margin: `10px auto 10px auto`,
  },
  iconButton: {
    padding: 10,
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    backgroundColor: theme.palette.background.bodyfield,
  },
  errorBox: {
    position: `relative`,
    backgroundColor: theme.palette.background.moduleAdd,
    mb: 3
  },
  customError: {
    color: `red`,
    fontSize: `0.8rem`,
    pl: 1,
    position: `absolute`,
    top: `0px`,
    left: `20px`
  }
}));


type Props = {
  open     : boolean
  onClose  : () => void
}


/** Выбор дела для добавления в расписание, а при отсутствии нужного, возможность его добавить */
const TodoListChange: FC<Props> = ({ open, onClose }) => {
  const
    sx = useStyles(useTheme() as Theme),
    error = useSelector(selectScheduleError),
    todoList = useSelector(selectTodoList),
    dispatch = useAppDispatch();

  /** Добавление todo */
  const handlerAddTodo = (title: string) => {
    const todo = { id: createId(todoList), title };
    handlerEditTodo(todo);
    dispatch(actions.clearError());
  };
  
  /** Редактирование todo */
  const handlerEditTodo = (todo: TodoListItem) => {
    let newTodoList = updateArrById(todoList, todo);
    dispatch(actions.setTodoList(newTodoList));
    LS.setTodolist(newTodoList);
  };

  /** Удаление todo */
  const handlerDelTodo = (todo: TodoListItem) => {
    const newTodoList = getArrWithoutItem(todoList, todo);
    dispatch(actions.setTodoList(newTodoList));
    LS.setTodolist(newTodoList);
  };

  const listRef = useRef(null);
  useEffect(() => {
    if (open) {
      const { current: listElement } = listRef;
      if (listElement !== null) {
        listElement.focus();
      }
    }
  }, [open]);

  if (!open) return null;


  return (
    <Dialog
      open     = {open}
      maxWidth = "xs"
      sx       = {sx.dialog}
      onClose  = {onClose}
    >
      <DialogTitle onClose={onClose}>Настройка списка дел</DialogTitle>
      <DialogContent dividers ref={listRef} sx={sx.container} >
        {
          todoList?.map((todoListItem, i) => <TodoItem
            key          = {todoListItem.title + i}
            todoListItem = {todoListItem}
            onEdit       = {handlerEditTodo}
            onDel        = {handlerDelTodo}
          />)
        }
      </DialogContent>

      <ElementAdd
        type  = {TodoElement.TODOS}
        onAdd = {handlerAddTodo}
      />
      <Box sx={sx.errorBox}>
        <Typography
          variant="h5"
          sx={sx.customError}
        >
          {error.general}
        </Typography>
      </Box>
    </Dialog>
  );
}

export default TodoListChange;
