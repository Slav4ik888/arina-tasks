import React, { useState } from 'react';
// Components
import ShowTasks from '../show-tasks/show-tasks.jsx';
import TasksForm from '../tasks-form/tasks-form';
import { getLocalStorage, setLocalStorage } from '../../utils/storage';


// Главный управляющий элемент
const TasksContainer = () => {

  const [store, setStore] = useState(getLocalStorage(`arina-task`));

  const [isForm, setIsForm] = useState(true); // Показ формы
  const [tasks, setTasks] = useState(store.lastTasks || []); // Примеры

  const handleSetTasks = (arr, newStore) => {
    setTasks(arr);
    setIsForm(false);
    setLocalStorage(`arina-task`, newStore);
    setStore(newStore);
  };

  const handleClearTasks = () => {
    setTasks([]);
    setIsForm(true);
  };


  return (
    <>
      {/* Выводим начальную форму */}
      {
        isForm && <TasksForm onSetTasks={handleSetTasks} store={store} />
      }

      {/* Выводим готовые примеры */}
      {
        !isForm && <ShowTasks tasks={tasks} onClearTasks={handleClearTasks} />
      }
    </>
  )
}

export default TasksContainer;