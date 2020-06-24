import React from 'react';
import Task23Arg from '../../components/Task23Arg/task-2-3-arg.jsx';
import s from './show-tasks.module.css';

// Рендер карточек
export const ShowTasks = ({ tasks }) => {
  return (
      <div className={s.section}>
          {tasks.map( ({ a, type1, b, type2, c } , index) => (
              <Task23Arg a={a} type1={type1} b={b} type2={type2} c={c} key={index}/>
          ))}
      </div>
  );
}