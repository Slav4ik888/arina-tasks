import React, { useState } from 'react';
// MUI Stuff
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
// Components
import TasksFormElem from '../tasks-form-elem/tasks-form-elem';
import { createPlusTasks } from '../../utils/create-plus-tasks.js';
import { createMinusTasks } from '../../utils/create-minus-tasks.js';
import { createMultyTasks } from '../../utils/create-multy-tasks.js';


const useStyle = makeStyles((theme) => ({
  container: {
    display: `flex`,
    flexWrap: `wrap`,
    justifyContent: `center`,
    height: `max-content`,
    color: theme.palette.primary.contrastText,
    backgroundColor: theme.palette.primary.main,
    margin: theme.spacing(4, 0),
    padding: theme.spacing(2, 4),
  },
  inputBox: {
    display: `flex`,
    alignItems: `center`,
    justifyContent: `center`,
  },
  inputBut: {
    width: `100%`,
    // height: `max-content`,
    padding: theme.spacing(1, 2),
    margin: theme.spacing(4, 0),
    color: theme.palette.secondary.ultradark,
    backgroundColor: theme.palette.secondary.main,
    fontSize: `20px`,
    // border: `none`,
  },
}));


const TasksForm = ({ onSetTasks, store }) => {
  console.log('store: ', store);

  const classes = useStyle();
  const [error, setError] = useState({ message: ``, id: `` });

  // СЛОЖЕНИЕ
  const [qualPlusTasks, setQualPlusTasks] = useState(store.qualPlusTasks || 10);  // Кол-во примеров сложения
  const changeQualPlus = e => {
    const v = +e.target.value;
    const anchorEl = e.currentTarget;

    if (v > 0 && v < 100) {
      setQualPlusTasks(v);
    } else {
      setError({ message: `Количество примеров должно быть > 0 и < 100`, id: `plus`, anchorEl });
    }
  };
  const [minPlus, setMinPlus] = useState(store.minPlus || 3); // От 
  const changeMinPlus = e => {
    const v = +e.target.value;
    const anchorEl = e.currentTarget;

    if (v > 0 && v < 100 && v < maxPlus) {
      setMinPlus(v);console.log('v: ', v);
    } else {
      setError({ message: `Число "от" должно быть < числа "до" и любое число должно быть > 0 и < 100`, id: `plus`, anchorEl });
    }
  };
  const [maxPlus, setMaxPlus] = useState(store.maxPlus || 9); // До
  const changeMaxPlus = e => {
    const v = +e.target.value;
    const anchorEl = e.currentTarget;

    if (v > 0 && v < 100 && v > minPlus) {
      setMaxPlus(e.target.value);console.log('v: ', v);
    } else {
      setError({ message: `Число "до" должно быть > числа "от" и любое число должно быть > 0 и < 100, `, id: `plus`, anchorEl });
    }
  };

  // ВЫЧИТАНИЕ
  const [qualMinusTasks, setQualMinusTasks] = useState(store.qualMinusTasks || 10); // Кол-во примеров вычитания
  const changeQualMinus = e => {
    const v = +e.target.value;
    const anchorEl = e.currentTarget;

    if (v > 0 && v < 101) {
      setQualMinusTasks(v);
    } else {
      setError({ message: `Количество примеров должно быть > 0 и < 100`, id: `minus`, anchorEl });
    }
  };
  const [minMinus, setMinMinus] = useState(store.minMinus || 3); // От 
  const changeMinMinus = e => {
    const v = +e.target.value;
    const anchorEl = e.currentTarget;

    if (v > 0 && v < 100 && v < maxMinus) {
      setMinMinus(v);
    } else {
      setError({ message: `Число "от" должно быть < числа "до" и любое число должно быть > 0 и < 100`, id: `minus`, anchorEl });
    }
  };
  const [maxMinus, setMaxMinus] = useState(store.maxMinus || 9); // До
  const changeMaxMinus = e => {
    const v = +e.target.value;
    const anchorEl = e.currentTarget;

    if (v > 0 && v < 100 && v > minMinus) {
      setMaxMinus(e.target.value);
    } else {
      setError({ message: `Число "до" должно быть > числа "от" и любое число должно быть > 0 и < 100, `, id: `minus`, anchorEl });
    }
  };

  // ПРИМЕРЫ В 2 ДЕЙСТВИЯ
  const [qualMultyTasks, setQualMultyTasks] = useState(store.qualMultyTasks || 10); // Кол-во примеров в 2 действия
  const changeQualMulty = e => {
    const v = +e.target.value;
    const anchorEl = e.currentTarget;

    if (v > 0 && v < 101) {
      setQualMultyTasks(v);
    } else {
      setError({ message: `Количество примеров должно быть > 0 и < 100`, id: `multy`, anchorEl });
    }
  };
  const [minMulty, setMinMulty] = useState(store.minMulty || 2); // От 
  const changeMinMulty = e => {
    const v = +e.target.value;
    const anchorEl = e.currentTarget;

    if (v > 0 && v < 100 && v < maxMulty) {
      setMinMulty(v);
    } else {
      setError({ message: `Число "от" должно быть < числа "до" и любое число должно быть > 0 и < 100`, id: `multy`, anchorEl });
    }
  };
  const [maxMulty, setMaxMulty] = useState(store.maxMulty || 5); // До
  const changeMaxMulty = e => {
    const v = +e.target.value;
    const anchorEl = e.currentTarget;

    if (v > 0 && v < 100 && v > minMulty) {
      setMaxMulty(e.target.value);
    } else {
      setError({ message: `Число "до" должно быть > числа "от" и любое число должно быть > 0 и < 100, `, id: `multy`, anchorEl });
    }
  };


  // ЗАПУСК
  const handleCreate = e => {
    e.preventDefault();

    // Созданные примеры
    const tasks = [
      ...createPlusTasks(qualPlusTasks, minPlus, maxPlus),
      ...createMinusTasks(qualMinusTasks, minMinus, maxMinus),
      ...createMultyTasks(qualMultyTasks, minMulty, maxMulty)
    ];
    onSetTasks(tasks, { // Данные для store
      qualPlusTasks, minPlus, maxPlus,
      qualMinusTasks, minMinus, maxMinus,
      qualMultyTasks, minMulty, maxMulty,
      lastTasks: tasks,
    });
  }
    
  // Очистка ошибки
  const handleClearError = () => setError({ message: ``, id: `` });

  return (
    <Card className={classes.container}>
      <form onSubmit={handleCreate}>

        <TasksFormElem
          id={`plus`} title={`Задачи по "Сложению"`}
          qual={qualPlusTasks} min={minPlus} max={maxPlus}
          onChangeQual={changeQualPlus} onChangeMin={changeMinPlus} onChangeMax={changeMaxPlus}
          error={error} onClearError={handleClearError}
        />
        <TasksFormElem
          id={`minus`} title={`Задачи по "Вычитанию"`}
          qual={qualMinusTasks} min={minMinus} max={maxMinus}
          onChangeQual={changeQualMinus} onChangeMin={changeMinMinus} onChangeMax={changeMaxMinus}
          error={error} onClearError={handleClearError}
        />
        <TasksFormElem
          id={`multy`} title={`Задачи в 2 действия`}
          qual={qualMultyTasks} min={minMulty} max={maxMulty}
          onChangeQual={changeQualMulty} onChangeMin={changeMinMulty} onChangeMax={changeMaxMulty}
          error={error} onClearError={handleClearError}
        />
                
        <Button variant="contained" color="secondary" onClick={handleCreate} className={classes.inputBut}>
          Создать
        </Button>
                
      </form>
    </Card>
  );
};

export default TasksForm;