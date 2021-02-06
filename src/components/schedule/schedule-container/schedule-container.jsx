import React, { useState } from 'react';
// Readux Stuff
import { connect } from 'react-redux';
import { ActionCreator } from '../../../services/reducer';
// Components
import ScheduleForm from '../schedule-form/schedule-form';
// Functions
import { getLocalStorage, setLocalStorage } from '../../../utils/storage';
import { emptyTodos } from '../schedule-utils';
import { mockTodoList } from '../../../services/mocks';


// Главный управляющий элемент
const ScheduleContainer = ({ schedule, todoList, handleSetSchedule, handleSetTodoList, handleSetNavbarOff, handleSetNavbarOn }) => {

  const [isForm, setIsForm] = useState(true); // Показ формы или вывод на печать

  if (schedule && !schedule.length) { // Если расписание не загружено
    const localSchedule = getLocalStorage(`arina-schedule`).schedule;
    // Если расписание было в localStorage, то сохраняем из localStorage, иначе из emptyTodos
    const resSchedule = localSchedule && localSchedule.length ? localSchedule : emptyTodos;
    handleSetSchedule(resSchedule);
  }

  if (todoList && !todoList.length) {
    const localTodoList = getLocalStorage(`arina-todoList`).todoList;
    // Если todoList был в localStorage, то сохраняем из его, иначе из mockTodoList
    const resTodoList = localTodoList && localTodoList.length ? localTodoList : mockTodoList;
    handleSetTodoList(resTodoList);
  }

  const handleUpdateSchedule = (updatedSchedule) => {
    console.log('updatedSchedule: ', updatedSchedule);
    handleSetSchedule(updatedSchedule);
  };

  const handleSaveSchedule = (savedSchedule) => {
    console.log('savedSchedule: ', savedSchedule);
    handleSetSchedule(savedSchedule);
    setLocalStorage(`arina-schedule`, { schedule: savedSchedule });
  };

  const handlePrintSchedule = (savedSchedule) => {
    console.log('printSchedule: ', savedSchedule);
    handleSaveSchedule(savedSchedule);
    setIsForm(false);
    handleSetNavbarOff();
  };
  

  const handleClearSchedule = () => {
    handleSetSchedule(emptyTodos);
  };


  return (
    <>
      {
        isForm && <ScheduleForm
          onUpdateSchedule={handleUpdateSchedule}
          onSaveSchedule={handleSaveSchedule}
          onPrintSchedule={handlePrintSchedule}
          onClearSchedule={handleClearSchedule}
        />
      }
      
      {/* {
        !isForm && <ShowTasks tasks={tasks} onClearTasks={handleClearTasks} />
      } */}
    </>
  )
};

const mapStateToProps = (state) => ({
  schedule: state.schedule,
  todoList: state.todoList,
});

const mapDispatchToProps = (dispatch) => ({
  handleSetSchedule(schedule) {
    dispatch(ActionCreator.setSchedule(schedule));
  },
  handleSetTodoList(todoList) {
    dispatch(ActionCreator.setTodoList(todoList));
  },
  handleSetNavbarOff() {
    dispatch(ActionCreator.setNavbarOff());
  },
  handleSetNavbarOn() {
    dispatch(ActionCreator.setNavbarOn());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ScheduleContainer);