import { FC, useState } from 'react';
// Readux Stuff
import { useAppDispatch } from 'shared/lib/hooks';
// Components
import ShowTasks from '../show-tasks';
import TasksForm from '../tasks-form';
// Functions
import * as LS from 'shared/lib/local-storage';
import { ExPanel, Tasks } from 'app/types';
import { navbarActions } from 'features/navbar';


const TasksContainer: FC = () => {
  const
    [exPanel, setExPanel] = useState(() => LS.getExPanel()),
    [isForm,  setIsForm]  = useState(true),                     // Показ формы
    [tasks,   setTasks]   = useState(exPanel?.lastTasks || []), // Примеры
    dispatch = useAppDispatch();

  
  const handlerSetTasks = (arr: Tasks, newExPanel: ExPanel) => {
    setTasks(arr);
    setIsForm(false);
    LS.setExPanel(newExPanel);
    setExPanel(newExPanel);
    dispatch(navbarActions.setStatus(false));
  };

  const handlerClearTasks = () => {
    setTasks([]);
    setIsForm(true);
    dispatch(navbarActions.setStatus(true));
  };


  return (
    <>
      {
        isForm
          ? <TasksForm exPanel={exPanel} onSetTasks={handlerSetTasks} />
          : <ShowTasks tasks={tasks} onClearTasks={handlerClearTasks} />
      }
    </>
  )
};

export default TasksContainer;
