import { FC, useEffect, useState } from 'react';
// Readux Stuff
import { useAppDispatch } from 'shared/lib/hooks';
import { useSelector } from 'react-redux';
import { Tasks, selectTasks, tasksActions } from '../../model';
import { navbarActions } from 'features/navbar';
// Components
import ShowTasks from '../show-tasks';
import TasksForm from '../../tasks-form';



export const TasksPrepare: FC = () => {
  const
    [isForm, setIsForm] = useState(true), // Показ формы
    tasks = useSelector(selectTasks),       // Примеры
    dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(navbarActions.setStatusNavbar(true));
    dispatch(navbarActions.setStatusFooter(true));
  }, []);
  
  const handlerSetTasks = (arr: Tasks) => {
    setIsForm(false);
    dispatch(tasksActions.setTasks(arr));
    dispatch(navbarActions.setStatusNavbar(false));
  };

  const handlerClearTasks = () => {
    setIsForm(true);
    dispatch(tasksActions.setTasks([]));
    dispatch(navbarActions.setStatusNavbar(true));
  };


  return (
    <>
      {
        isForm
          ? <TasksForm onSetTasks={handlerSetTasks} />
          : <ShowTasks tasks={tasks} onClearTasks={handlerClearTasks} />
      }
    </>
  )
};
