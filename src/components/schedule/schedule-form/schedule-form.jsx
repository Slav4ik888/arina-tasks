import React, { useState } from 'react';
import pt from 'prop-types';
// Readux Stuff
import { connect } from 'react-redux';
// import { ActionCreator } from '../../../services/reducer';
// MUI Stuff
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
// import Checkbox from '@material-ui/core/Checkbox';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Switch from '@material-ui/core/Switch';
import Button from '@material-ui/core/Button';
// Components
import EnhancedTableHead from './enhanced-table-head';
import EnhancedTableToolbar from './enhanced-table-toolbar';
import TodoContainer from '../../todos/todo-container/todo-container';
// Functions
import { emptyTodos, getUpdatedWeek } from '../schedule-utils';

const StyledCell = withStyles((theme) => ({
  body: {
    textAlign: "center",
    minWidth: 100,
    maxWidth: 100,
    padding: `2px 0 2px 0`,
  }
}))(TableCell);

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    padding: theme.spacing(2),
  },
  paper: {
    width: '100%',
    marginBottom: theme.spacing(2),
  },
  table: {
    minWidth: 750,
  },
  cell: {
    borderRight: `1px solid #f4f4f4`,
    display: `flex`,
    alignItems: `center`,
    justifyContent: `center`,
    height: `45px`,
  },
  cellLast: {
    display: `flex`,
    alignItems: `center`,
    justifyContent: `center`,
    height: `45px`,
  },
  visuallyHidden: {
    border: 0,
    clip: 'rect(0 0 0 0)',
    height: 1,
    margin: -1,
    overflow: 'hidden',
    padding: 0,
    position: 'absolute',
    top: 20,
    width: 1,
  },
  action: {
    display: `flex`,
    flexDirection: `row`,
    justifyContent: `flex-end`,
  },
  switch: {
    flexGrow: 1,
  },
  button: {
    marginLeft: theme.spacing(2),
  },
}));

const ScheduleForm = ({ onUpdateSchedule, onSaveSchedule, onPrintSchedule, onClearSchedule, schedule }) => {
  const classes = useStyles();

  const [selected, setSelected] = useState([]);
  const [dense] = useState(false);

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = emptyTodos.map((n) => n.time);
      setSelected(newSelecteds);
    } else {
      setSelected([]);
    }
  };

  // Выделяем/снимаем выделение строки при клике на строку
  // const handleClick = (e, time) => {
  //   const selectedIdx = selected.indexOf(time);
  //   let newSelected = [];

  //   if (selectedIdx === -1) {
  //     newSelected = newSelected.concat(selected, time);
  //   } else {
  //     newSelected = [...selected.slice(0, selectedIdx), ...selected.slice(selectedIdx + 1)];
  //   }

  //   setSelected(newSelected);
  // };

  // const handleChangeDense = (event) => {
  //   setDense(event.target.checked);
  // };

  const isSelected = (time) => selected.indexOf(time) !== -1;


  // Меняем todo
  const handleSetTodo = (todo) => {
    let updatedSchedule = [];
    updatedSchedule = updatedSchedule.concat(schedule);

    const idx = updatedSchedule.findIndex(item => item.time === todo.time);
    
    updatedSchedule[idx] = getUpdatedWeek(updatedSchedule[idx], todo);
    onUpdateSchedule(updatedSchedule);
  };

  // Сохраняем расписание
  const handleSaveSchedule = () => onSaveSchedule(schedule);

  // const handlePrintSchedule = () => {
  //   console.log(`Нажали вывести на печать: `, schedule);
  //   onPrintSchedule(schedule);
  // };

  // Очищаем расписание
  const handleClearSchedule = () => onClearSchedule();

  if (!schedule) return null;
  if (schedule && !schedule.length) return null;

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <EnhancedTableToolbar numSelected={selected.length} />

        <TableContainer>
          <Table
            className={classes.table}
            aria-labelledby="tableTitle"
            size={dense ? 'small' : 'medium'}
            aria-label="расписание"
          >
            <EnhancedTableHead
              numSelected={selected.length}
              onSelectAllClick={handleSelectAllClick}
              rowCount={schedule.length}
            />
            <TableBody>
              {schedule.map((todo, index) => {
                  const isItemSelected = isSelected(todo.time);
                  const labelId = `shedule-checkbox-${index}`;

                  return (
                    <TableRow
                      hover
                      // onClick={(e) => handleClick(e, todo.time)}
                      role="checkbox"
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={todo.time}
                      selected={isItemSelected}
                    >
                      {/* <StyledCell padding="checkbox">
                        <div className={classes.cell}>
                          <Checkbox
                            checked={isItemSelected}
                            inputProps={{ 'aria-labelledby': labelId }}
                          />
                        </div>
                      </StyledCell> */}
                      <StyledCell id={labelId} scope="row" >
                        <div className={classes.cell}>
                          {todo.time}
                        </div>
                      </StyledCell>
              
                      <StyledCell>
                        <div className={classes.cell}>
                          <TodoContainer key={`${todo.time}-monday`} todo={todo.monday} onSetTodo={handleSetTodo} />
                        </div>
                      </StyledCell>
                      <StyledCell>
                        <div className={classes.cell}>
                          <TodoContainer key={`${todo.time}-tuesday`} todo={todo.tuesday} onSetTodo={handleSetTodo} />
                        </div>
                      </StyledCell>
                      <StyledCell>
                        <div className={classes.cell}>
                          <TodoContainer key={`${todo.time}-wednesday`} todo={todo.wednesday} onSetTodo={handleSetTodo} />
                        </div>
                      </StyledCell>
                      <StyledCell>
                        <div className={classes.cell}>
                          <TodoContainer key={`${todo.time}-thursday`} todo={todo.thursday} onSetTodo={handleSetTodo} />
                        </div>
                      </StyledCell>
                      <StyledCell>
                        <div className={classes.cell}>
                          <TodoContainer key={`${todo.time}-friday`} todo={todo.friday} onSetTodo={handleSetTodo} />
                        </div>
                      </StyledCell>
                      <StyledCell>
                        <div className={classes.cell}>
                          <TodoContainer key={`${todo.time}-saturday`} todo={todo.saturday} onSetTodo={handleSetTodo} />
                        </div>
                      </StyledCell>
                      <StyledCell>
                        <div className={classes.cell}>
                          <TodoContainer key={`${todo.time}-sunday`} todo={todo.sunday} onSetTodo={handleSetTodo} />
                        </div>
                      </StyledCell>
                    </TableRow>
                  );
                })}
             
            </TableBody>
          </Table>
        </TableContainer>
        
      </Paper>

      <div className={classes.action}>
        {/* <FormControlLabel
          control={<Switch checked={dense} onChange={handleChangeDense} />}
          label="Dense padding"
          className={classes.switch}
        /> */}
        
        <Button variant="contained" onClick={handleClearSchedule} className={classes.button}>
          Очистить
        </Button>
        <Button variant="contained" color="primary" onClick={handleSaveSchedule} className={classes.button}>
          Сохранить
        </Button>
        {/* <Button variant="contained" color="secondary" onClick={handlePrintSchedule} className={classes.button}>
          На печать
        </Button> */}
      </div>
    </div>
  );
};

ScheduleForm.propTypes = {
  onUpdateSchedule: pt.func.isRequired,
  onSaveSchedule: pt.func.isRequired,
  onPrintSchedule: pt.func.isRequired,
  onClearSchedule: pt.func.isRequired,
  schedule: pt.array.isRequired,

};

const mapStateToProps = (state) => ({
  schedule: state.schedule,
});

// const mapDispatchToProps = (dispatch) => ({
//   handleSetNavbarOff() {
//     dispatch(ActionCreator.setNavbarOff());
//   },
//   handleSetNavbarOn() {
//     dispatch(ActionCreator.setNavbarOn());
//   },
// });

export default connect(mapStateToProps, undefined)(ScheduleForm);

//   const [error, setError] = useState({ message: ``, id: `` });

//   // const [maxPlus, setMaxPlus] = useState(store.maxPlus || 9); // До
//   // const changeMaxPlus = e => {
//   //   const v = +e.target.value;
//   //   const anchorEl = e.currentTarget;

//   //   if (true) {
//   //     // setMaxPlus(e.target.value);console.log('v: ', v);
//   //   } else {
//   //     setError({ message: ``, id: `plus`, anchorEl });
//   //   }
//   // };


//   // ЗАПУСК формирования расписания
//   const handleCreate = e => {
//     e.preventDefault();

//     // Создаём расписание

//     // Отправляем 
//     onSetSchedule(
//       // schedule,
//       { // Данные для store
      
//       }
//     );
//   }
    
//   // Очистка ошибки
//   const handleClearError = () => setError({ message: ``, id: `` });


//   return (
//     <>
//       <div style={{ height: 400, width: '100%' }}>
//         <DataGrid rows={rows} columns={columns} pageSize={5} checkboxSelection />
//       </div>
      
//     {/* <Card className={classes.container}>
//       <form onSubmit={handleCreate}>

//         <Button variant="contained" color="secondary" onClick={handleCreate} className={classes.inputBut}>
//           Создать
//         </Button>
                
//       </form>
//       </Card> */}
//     </>
//   );
// };

// export default ScheduleForm;