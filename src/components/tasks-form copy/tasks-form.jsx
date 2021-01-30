import React, { useState } from 'react';
import s from './tasks1.module.css';
// MUI Stuff
import { makeStyles } from '@material-ui/core/styles';

import {createPlusTasks} from '../../utils/create-plus-tasks.js';
import {createMinusTasks} from '../../utils/create-minus-tasks1.js';
import {createMultyTasks} from '../../utils/create-multy-tasks.js';


const useStyle = makeStyles((theme) => ({
  body: {
    height: `100vh`,
    display: `flex`,
    flexDirection: `column`,
  },
  container: {
    width: `70%`,
    margin: `auto`,
  },
  header: {
    display: `flex`,
    flexDirection: `column`,
    alignItems: `center`,
    justifyContent: `space-between`,
    margin: theme.spacing(2, 0),
  },
}));


const TasksForm = ({ onSetTasks }) => {

  const classes = useStyle();

  // СЛОЖЕНИЕ
  const [qualPlusTasks, setQualPlusTasks] = useState(10);  // Кол-во примеров сложения
  const changeQualPlus = e => setQualPlusTasks(e.target.value);
  const [minPlus, setMinPlus] = useState(3); // От 
  const changeMinPlus = e => setMinPlus(e.target.value);
  const [maxPlus, setMaxPlus] = useState(13); // До
  const changeMaxPlus = e => setMaxPlus(e.target.value);

  // ВЫЧИТАНИЕ
  const [qualMinusTasks, setQualMinusTasks] = useState(10); // Кол-во примеров вычитания
  const changeQualMinus = e => setQualMinusTasks(e.target.value);
  const [minMinus, setMinMinus] = useState(3); // От 
  const changeMinMinus = e => setMinMinus(e.target.value);
  const [maxMinus, setMaxMinus] = useState(13); // До
  const changeMaxMinus = e => setMaxMinus(e.target.value);

  // ПРИМЕРЫ В 2 ДЕЙСТВИЯ
  const [qualMultyTasks, setQualMultyTasks] = useState(12); // Кол-во примеров в 2 действия
  const changeQualMulty = e => setQualMultyTasks(e.target.value);
  const [minMulty, setMinMulty] = useState(3); // От 
  const changeMinMulty = e => setMinMulty(e.target.value);
  const [maxMulty, setMaxMulty] = useState(8); // До
  const changeMaxMulty = e => setMaxMulty(e.target.value);


  // ЗАПУСК
  const handleCreate = e => {
    e.preventDefault();

    onSetTasks([
      ...createPlusTasks(qualPlusTasks, minPlus, maxPlus),
      ...createMinusTasks(qualMinusTasks, minMinus, maxMinus),
      ...createMultyTasks(qualMultyTasks, minMulty, maxMulty)
    ]);
  }
    

  return (
    <div className={s.section}>
      <div className={s.root}>
        <form onSubmit={handleCreate}>
          <div className={s.title}>Задачи по "Сложению"</div>

          <label>Сколько создать
            <input type="number" className={s.inputMaxMin}
              value={qualPlusTasks}
              onChange={changeQualPlus}
            />
          </label>

          <label>Числа от
            <input type="number" className={s.inputMaxMin}
              value={minPlus}
              onChange={changeMinPlus}
            />
          </label>

          <label>До
            <input type="number" className={s.inputMaxMin}
              value={maxPlus}
              onChange={changeMaxPlus}
            />
          </label>

          <div className={s.title}>Задачи по "Вычитанию"</div>
          <label>Сколько создать
                      <input type="number" className={s.inputMaxMin}
              value={qualMinusTasks}
              onChange={changeQualMinus} />
          </label>
          <label>Числа от
                      <input type="number" className={s.inputMaxMin}
              value={minMinus}
              onChange={changeMinMinus} />
          </label>
          <label>До
                      <input type="number" className={s.inputMaxMin}
              value={maxMinus}
              onChange={changeMaxMinus} />
          </label>

          <div className={s.title}>Задачи в 2 действия</div>
          <label>Сколько создать
                      <input type="number" className={s.inputMaxMin}
              value={qualMultyTasks}
              onChange={changeQualMulty} />
          </label>
          <label>Числа от
                      <input type="number" className={s.inputMaxMin}
              value={minMulty}
              onChange={changeMinMulty} />
          </label>
          <label>До
                      <input type="number" className={s.inputMaxMin}
              value={maxMulty}
              onChange={changeMaxMulty} />
          </label>
                  
          <label>
            <br />
            <br />
            <br />
            <input type="submit" value="Создать" className={s.inputBut} />
          </label>
                  
        </form>
      </div>
    </div>
  );
};

export default TasksForm;