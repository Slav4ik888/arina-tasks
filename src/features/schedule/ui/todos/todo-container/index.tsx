import { useState, useEffect, FC } from 'react';
// Readux Stuff
import { useSelector } from 'react-redux';
import { selectTodoList, Todo } from 'features/schedule/module';
// MUI Stuff
import { Box } from '@mui/system';
// Component
import TodoListContainer from '../todo-list';
import TodoListChange from '../todo-list-change';
// Functions
import { Theme } from 'app/providers/theme';
import { useTheme } from '@emotion/react';
import { DoneIcon } from './done-icon';



const useStyles = ((theme: Theme) => ({
  root: {
    '& > svg': {
      m: 2
    }
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: `center`,
    justifyContent: `space-between`,
    width: `100%`,
    height: `100%`,
    p: 0.25
  },
  todoTitle: {
    textAlign: `center`,
    width: `105px`,
    fontSize: theme.fontSize.todo
  }
}));


type Props = {
  todo      : Todo
  onSetTodo : (todo: Todo) => void
}


/** Выбор дела для добавления в расписание, а при отсутствии нужного, возможность его добавить */
const TodoContainer: FC<Props> = ({ todo, onSetTodo }) => {
  const
    sx = useStyles(useTheme() as Theme),
    todoList = useSelector(selectTodoList),

    [visible, setVisible] = useState(false), // Видимость объекта
    [activated, setActivated] = useState(Boolean(todo.title)); // Начали работу с объектом, либо в нём есть данные
  
  useEffect(() => {
    setActivated(Boolean(todo?.title));
  }, [todo]);

  const handlerMouseOn = () => setVisible(true);
  const handlerMouseOff = () => setVisible(false);

  // Сохраняем выбранное
  const handlerSelected = (title: string) => {
    const updatedTodo = { ...todo };

    if (title === 'Не выбрано') {
      updatedTodo.title = '';
      setActivated(true);
    }
    else {
      updatedTodo.title = title;
      setActivated(true);
    }

    onSetTodo(updatedTodo);
    handlerMouseOff();
  };

  const [showChangeTodoList, setShowChangeTodoList] = useState(false);
  const handlerChangeTodoListOn = () => setShowChangeTodoList(true);
  const handlerChangeTodoListOff = () => setShowChangeTodoList(false);
  

  return (
    <Box
      sx           = {sx.container}
      onMouseEnter = {handlerMouseOn}
      onMouseLeave = {handlerMouseOff}
    >
      {
        visible ? <TodoListContainer
            todoList     = {todoList}
            label        = 'todo'
            onSelected   = {handlerSelected}
            onChangeItem = {handlerChangeTodoListOn}
          />
        : null
      }
      {
        activated && !visible && <>
          <Box sx={sx.todoTitle}>{todo.title}</Box>
          <DoneIcon style={{ fontSize: `40px` }} />
        </>
      }
      
      <TodoListChange
        open    = {showChangeTodoList}
        onClose = {handlerChangeTodoListOff}
      />
    </Box>
  );
}

export default TodoContainer;
