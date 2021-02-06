import React, { useState, useEffect } from 'react';
import pt from 'prop-types';
// Readux Stuff
import { connect } from 'react-redux';
// MUI Stuff
import { makeStyles } from '@material-ui/core/styles';
import SvgIcon from '@material-ui/core/SvgIcon';
// Component
import TodoList from '../todo-list/todo-list';
import TodoListChange from '../todo-list-change/todo-list-change';
// Functions


const DoneIcon = (props) => <SvgIcon {...props} >
  <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" viewBox="0 0 24 24" fill="#eeeeee" width="24px" height="24px"><g><path d="M0,0h24v24H0V0z" fill="none" /></g><g><path d="M12,2C6.48,2,2,6.48,2,12s4.48,10,10,10c5.52,0,10-4.48,10-10S17.52,2,12,2z M12,20c-4.41,0-8-3.59-8-8s3.59-8,8-8 c4.41,0,8,3.59,8,8S16.41,20,12,20z M15.54,8.82l-4.95,4.95l-2.12-2.12c-0.39-0.39-1.02-0.39-1.41,0l0,0 c-0.39,0.39-0.39,1.02,0,1.41l2.83,2.83c0.39,0.39,1.02,0.39,1.41,0l5.66-5.66c0.39-0.39,0.39-1.02,0-1.41l0,0 C16.56,8.43,15.93,8.43,15.54,8.82z" /></g></svg>
</SvgIcon>;

const useStyles = makeStyles((theme) => ({
  root: {
    '& > svg': {
      margin: theme.spacing(2),
    },
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: `center`,
    justifyContent: `space-between`,
    width: `100%`,
    height: `100%`,
    padding: theme.spacing(0.25),
  },
  todoTitle: {
    textAlign: `center`,
    width: `105px`,
    fontSize: theme.fontSize.todo,
  }
}));

// Выбор дела для добавления в расписание, а при отсутствии нужного, возможность его добавить
const TodoContainer = ({ todo, todoList, onSetTodo }) => {
  const classes = useStyles();

  const [visible, setVisible] = useState(false); // Видимость объекта
  const [activated, setActivated] = useState(Boolean(todo.title)); // Начали работу с объектом, либо в нём есть данные
  useEffect(() => {
    setActivated(Boolean(todo.title));
  }, [todo]);

  const handleMouseOn = () => setVisible(true);
  const handleMouseOff = () => setVisible(false);

  // Сохраняем выбранное
  const handleSelected = ({ title }) => {
    const updatedTodo = Object.assign({}, todo);

    if (title === `Не выбрано`) {
      updatedTodo.title = ``;
      setActivated(true);

    } else {
      updatedTodo.title = title;
      setActivated(true);
    }

    onSetTodo(updatedTodo);
    handleMouseOff();
  };

  const [showChangeTodoList, setShowChangeTodoList] = useState(false);
  const handleChangeTodoListOn = () => setShowChangeTodoList(true);
  const handleChangeTodoListOff = () => setShowChangeTodoList(false);
  

  return (
    <>
      <div
        onMouseEnter={handleMouseOn}
        onMouseLeave={handleMouseOff}
        className={classes.container}
      >
        {
          visible ? <TodoList
              items={todoList}
              valueField={`title`}
              label={`todo`}
              onSelected={handleSelected}
              onChangeItem={handleChangeTodoListOn}
            />
          : null
        }
        {
          activated && !visible ? <>
            <div className={classes.todoTitle}>{todo.title}</div>
            <DoneIcon style={{ fontSize: `40px` }} />
            </> : null
        }
        
        <TodoListChange
          open={showChangeTodoList}
          onClose={handleChangeTodoListOff}
        />
        
      </div>
    </>
  );
}

TodoContainer.propTypes = {
  todo: pt.object.isRequired,
  todoList: pt.array.isRequired,
  onSetTodo: pt.func.isRequired,
};

const mapStateToProps = (state) => ({
  todoList: state.todoList,
});

export default connect(mapStateToProps)(TodoContainer);

