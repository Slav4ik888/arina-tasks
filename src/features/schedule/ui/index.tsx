import { FC, useState } from 'react';
// Readux Stuff
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks';
import { navbarActions } from 'features/navbar';
import { Schedule, scheduleActions, selectScheduleSchedule, selectTodoList } from '../module';
// Components
import ScheduleForm from '../../../components/schedule/schedule-form/schedule-form';
// Functions
import * as LS from 'shared/lib/local-storage';
import { EMPTY_SCHEDULE } from '../utils';


// Главный управляющий элемент
const ScheduleContainer: FC = () => {
  const
    [isForm, setIsForm] = useState(true), // Показ формы или вывод на печать
    schedule = useSelector(selectScheduleSchedule),
    todoList = useSelector(selectTodoList),
    dispatch = useAppDispatch();


  const handlerUpdateSchedule = (updatedSchedule: Schedule) => {
    console.log('updatedSchedule: ', updatedSchedule);
    dispatch(scheduleActions.setSchedule(updatedSchedule));
  };


  const handlerSaveSchedule = (savedSchedule: Schedule) => {
    console.log('savedSchedule: ', savedSchedule);
    dispatch(scheduleActions.setSchedule(savedSchedule));
    LS.setSchedule(savedSchedule);
  };


  const handlerPrintSchedule = (schedule: Schedule) => {
    console.log('printSchedule: ', schedule);
    handlerSaveSchedule(schedule);
    setIsForm(false);
    dispatch(navbarActions.setStatus(false));
  };
  

  const handlerClearSchedule = () => handlerSaveSchedule(EMPTY_SCHEDULE);


  return (
    <>
      {
        isForm && <ScheduleForm
          onUpdateSchedule={handlerUpdateSchedule}
          onSaveSchedule={handlerSaveSchedule}
          onPrintSchedule={handlerPrintSchedule}
          onClearSchedule={handlerClearSchedule}
        />
      }
      
      {/* {
        !isForm && <ShowTasks tasks={tasks} onClearTasks={handlerClearTasks} />
      } */}
    </>
  )
};


export default ScheduleContainer;
