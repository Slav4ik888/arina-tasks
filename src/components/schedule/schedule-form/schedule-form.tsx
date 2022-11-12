import { FC, memo, useState } from 'react';
// Readux Stuff
import { useSelector } from 'react-redux';
import { Schedule, selectScheduleSchedule } from 'features/schedule';
// MUI Stuff
import { TableCell, Button, Paper, Box, TableContainer, Table, TableBody, TableRow } from '@mui/material';
// Components
import EnhancedTableHead from './enhanced-table-head';
import EnhancedTableToolbar from './enhanced-table-toolbar';
import TodoContainer from '../../todos/todo-container';
// Functions
import { EMPTY_SCHEDULE, getUpdatedWeek } from '../../../features/schedule/utils';
import { Time, Todo } from 'features/schedule/module';



const cellStyle = {
  '.MuiTableCell-body': {
    textAlign: "center",
    minWidth: 100,
    maxWidth: 100,
    padding: `2px 0 2px 0`
  }
};



const useStyles = () => ({
  root: {
    width: '100%',
    p: 2,
  },
  paper: {
    width: '100%',
    mb: 2,
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
    ml: 2,
  },
});


type Props = {
  onUpdateSchedule : (schedule: Schedule) => void;
  onSaveSchedule   : (schedule: Schedule) => void;
  onPrintSchedule  : (schedule: Schedule) => void;
  onClearSchedule  : () => void;
}


const ScheduleForm: FC<Props> = memo((props: Props) => {
  const
    sx = useStyles(),
    { onUpdateSchedule, onSaveSchedule, onPrintSchedule, onClearSchedule } = props,
    schedule = useSelector(selectScheduleSchedule),
    [selected, setSelected] = useState([]),
    [dense] = useState(false);

  const handlerSelectAllClick = (event: any) => {
    if (event.target.checked) {
      const newSelecteds = EMPTY_SCHEDULE.map((n) => n.time);
      setSelected(newSelecteds);
    }
    else {
      setSelected([]);
    }
  };

  // Выделяем/снимаем выделение строки при клике на строку
  // const handlerClick = (e, time) => {
  //   const selectedIdx = selected.indexOf(time);
  //   let newSelected = [];

  //   if (selectedIdx === -1) {
  //     newSelected = newSelected.concat(selected, time);
  //   } else {
  //     newSelected = [...selected.slice(0, selectedIdx), ...selected.slice(selectedIdx + 1)];
  //   }

  //   setSelected(newSelected);
  // };

  // const handlerChangeDense = (event) => {
  //   setDense(event.target.checked);
  // };

  const isSelected = (time: Time) => selected.indexOf(time) !== -1;


  // Меняем todo
  const handlerSetTodo = (todo: Todo) => {
    let updatedSchedule: Schedule = [];
    updatedSchedule = updatedSchedule.concat(schedule);

    const idx = updatedSchedule.findIndex(item => item.time === todo.time);
    
    updatedSchedule[idx] = getUpdatedWeek(updatedSchedule[idx], todo);
    onUpdateSchedule(updatedSchedule);
  };

  // Сохраняем расписание
  const handlerSaveSchedule = () => onSaveSchedule(schedule);

  // const handlerPrintSchedule = () => {
  //   console.log(`Нажали вывести на печать: `, schedule);
  //   onPrintSchedule(schedule);
  // };

  // Очищаем расписание
  const handlerClearSchedule = () => onClearSchedule();

  if (!schedule) return null;
  if (schedule && !schedule.length) return null;

  return (
    <Box sx={sx.root}>
      <Paper sx={sx.paper}>
        <EnhancedTableToolbar numSelected={selected.length} />

        <TableContainer>
          <Table
            size            = {dense ? 'small' : 'medium'}
            aria-labelledby = "tableTitle"
            aria-label      = "расписание"
            sx              = {sx.table}
          >
            <EnhancedTableHead />
            <TableBody>
              {schedule.map((todo, index) => {
                  const isItemSelected = isSelected(todo.time);
                  const labelId = `shedule-checkbox-${index}`;

                  return (
                    <TableRow
                      hover
                      // onClick={(e) => handlerClick(e, todo.time)}
                      role="checkbox"
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={todo.time}
                      selected={isItemSelected}
                    >
                      {/* <TableCell padding="checkbox">
                        <Box sx={sx.cell}>
                          <Checkbox
                            checked={isItemSelected}
                            inputProps={{ 'aria-labelledby': labelId }}
                          />
                        </Box>
                      </TableCell> */}
                      <TableCell id={labelId} scope="row" sx={cellStyle}>
                        <Box sx={sx.cell}>
                          {todo.time}
                        </Box>
                      </TableCell>
              
                      <TableCell sx={cellStyle}>
                        <Box sx={sx.cell}>
                          <TodoContainer key={`${todo.time}-monday`} todo={todo.monday} onSetTodo={handlerSetTodo} />
                        </Box>
                      </TableCell>
                      <TableCell sx={cellStyle}>
                        <Box sx={sx.cell}>
                          <TodoContainer key={`${todo.time}-tuesday`} todo={todo.tuesday} onSetTodo={handlerSetTodo} />
                        </Box>
                      </TableCell>
                      <TableCell sx={cellStyle}>
                        <Box sx={sx.cell}>
                          <TodoContainer key={`${todo.time}-wednesday`} todo={todo.wednesday} onSetTodo={handlerSetTodo} />
                        </Box>
                      </TableCell>
                      <TableCell sx={cellStyle}>
                        <Box sx={sx.cell}>
                          <TodoContainer key={`${todo.time}-thursday`} todo={todo.thursday} onSetTodo={handlerSetTodo} />
                        </Box>
                      </TableCell>
                      <TableCell sx={cellStyle}>
                        <Box sx={sx.cell}>
                          <TodoContainer key={`${todo.time}-friday`} todo={todo.friday} onSetTodo={handlerSetTodo} />
                        </Box>
                      </TableCell>
                      <TableCell sx={cellStyle}>
                        <Box sx={sx.cell}>
                          <TodoContainer key={`${todo.time}-saturday`} todo={todo.saturday} onSetTodo={handlerSetTodo} />
                        </Box>
                      </TableCell>
                      <TableCell sx={cellStyle}>
                        <Box sx={sx.cell}>
                          <TodoContainer key={`${todo.time}-sunday`} todo={todo.sunday} onSetTodo={handlerSetTodo} />
                        </Box>
                      </TableCell>
                    </TableRow>
                  );
                })}
             
            </TableBody>
          </Table>
        </TableContainer>
        
      </Paper>

      <Box sx={sx.action}>
        {/* <FormControlLabel
          control={<Switch checked={dense} onChange={handlerChangeDense} />}
          label="Dense padding"
          sx={sx.switch}
        /> */}
        
        <Button variant="contained" onClick={handlerClearSchedule} sx={sx.button}>
          Очистить
        </Button>
        <Button variant="contained" color="primary" onClick={handlerSaveSchedule} sx={sx.button}>
          Сохранить
        </Button>
        {/* <Button variant="contained" color="secondary" onClick={handlerPrintSchedule} sx={sx.button}>
          На печать
        </Button> */}
      </Box>
    </Box>
  );
});

export default ScheduleForm;
