import React, {useRef, useEffect} from 'react';
import pt from 'prop-types';
// Readux Stuff
import { connect } from 'react-redux';
import { ActionCreator } from '../../../services/reducer';
// MUI Stuff
import { makeStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import Typography from '@material-ui/core/Typography';
// Component
import DialogTitle from '../../dialog-title/dialog-title';
import TodoItem from '../todo-item/todo-item';
import ElementAdd from '../../buttons/element-add/element-add';
// Functions
import { typeElem } from '../../../services/types';
import { setLocalStorage } from '../../../utils/storage';
import { createId } from '../../../utils/utils';
import { getArrWithoutItemByField, updateArrWithItemByField } from '../../../utils/arrays';


const useStyles = makeStyles((theme) => ({
  dialog: {
    padding: theme.spacing(4),
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
    marginBottom: theme.spacing(3),
  },
  customError: {
    color: `red`,
    fontSize: `0.8rem`,
    paddingLeft: theme.spacing(1),
    position: `absolute`,
    top: `0px`,
    left: `20px`,
  },
}));

// Выбор дела для добавления в расписание, а при отсутствии нужного, возможность его добавить
const TodoListChange = ({ open, onClose, todoList, handleSetTodoList, error, handleSetError, handleClearError }) => {

  const classes = useStyles();

  // Добавление todo
  const handleAddTodo = ({ title }) => {
    const todo = { id: createId(todoList), title };
    handleEditTodo(todo);
    handleClearError();
  };
  
  // Редактирование todo
  const handleEditTodo = (todo) => {
    let newTodoList = updateArrWithItemByField(todoList, `id`, todo);
    handleSetTodoList(newTodoList);
    setLocalStorage(`arina-todoList`, { todoList: newTodoList });
  };

  // Удаление todo
  const handleDelTodo = (todo) => {
    const newTodoList = getArrWithoutItemByField(todoList, `id`, todo);
    handleSetTodoList(newTodoList);
    setLocalStorage(`arina-todoList`, { todoList: newTodoList });
  };

  const handleClose = () => onClose();

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
    <>
      <Dialog
        disableBackdropClick 
        className={classes.dialog} maxWidth="xs" // scroll={`paper`}
        open={open} onClose={handleClose}
      >
        <DialogTitle onClose={handleClose}>Настройка списка дел</DialogTitle>
        <DialogContent dividers ref={listRef} className={classes.container} >
          {
            todoList && todoList.length && todoList.map((todo, i) => <TodoItem
                key={todo.title + i}
                todo={todo}
                onEdit={handleEditTodo}
                onDel={handleDelTodo}
                error={error}
                onClearError={handleClearError}
                onSetError={handleSetError}
              />
            )
          }
        </DialogContent>

        <ElementAdd
          type={typeElem.TODOS}
          onAdd={handleAddTodo}
          error={error}
          onClearError={handleClearError}
          onSetError={handleSetError}
        />
        <div className={classes.errorBox}>
          <Typography variant="h5" className={classes.customError}>{error.general}</Typography>
        </div>
      </Dialog>
    </>
  );
}

TodoListChange.propTypes = {
  open: pt.bool.isRequired,
  onClose: pt.func.isRequired,
  todoList: pt.array.isRequired,
  handleSetTodoList: pt.func.isRequired,
};

const mapStateToProps = (state) => ({
  todoList: state.todoList,
  error: state.error,
});

const mapDispatchToProps = (dispatch) => ({
  handleSetTodoList(todoList) {
    dispatch(ActionCreator.setTodoList(todoList));
  },
  handleSetError(error) {
    dispatch(ActionCreator.setError(error));
  },
  handleClearError() {
    dispatch(ActionCreator.clearError());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoListChange);

