import React, { FC, useCallback, useState } from 'react';
// MUI Stuff
import { Button, Card } from '@mui/material';
// Components
import TasksFormElem from '../tasks-form-elem';
// Functions
import { createMinusTasks, createPlusTasks, createMultyTasks } from './utils';
// Types
import { ExPanel, TaskError, Tasks, TaskType, TastErrorMessage } from 'app/types/types';
import { createError } from './utils';
import { Theme } from 'app/providers/theme';
import { useTheme } from '@emotion/react';


const useStyles = ((theme: Theme) => ({
  container: {
    display: `flex`,
    flexWrap: `wrap`,
    justifyContent: `center`,
    height: `max-content`,
    color: theme.palette.primary.contrastText,
    backgroundColor: theme.palette.primary.main,
    my: 4,
    py: 2,
    px: 4
  },
  inputBox: {
    display: `flex`,
    alignItems: `center`,
    justifyContent: `center`
  },
  inputBut: {
    width: `100%`,
    py: 1,
    px: 2,
    my: 4,
    color: theme.palette.secondary.ultradark,
    backgroundColor: theme.palette.secondary.main,
    fontSize: `20px`,
    // border: `none`,
  },
}));


type Props = {
  exPanel    : ExPanel
  onSetTasks : (tasks: Tasks, exPanel: ExPanel) => void
}


/** Форма для выбора условий и создания примеров */
const TasksForm: FC<Props> = ({ exPanel, onSetTasks }) => {
  const
    sx = useStyles(useTheme() as Theme),
    [error, setError] = useState<TaskError>();

  // СЛОЖЕНИЕ
  const [qualPlusTasks, setQualPlusTasks] = useState(exPanel?.qualPlusTasks || 10);  // Кол-во примеров сложения
  const changeQualPlus = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const
      v = +e.target.value,
      anchorEl = e.currentTarget;

    if (v > 0 && v < 100) setQualPlusTasks(v);
    else setError(createError(TaskType.PLUS_SIMPLE, anchorEl, TastErrorMessage.PLUS_QUAL_01));
  }, []);

  const [minPlus, setMinPlus] = useState(exPanel?.minPlus || 3); // От 
  const changeMinPlus = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const
      v = +e.target.value,
      anchorEl = e.currentTarget;

    if (v > 0 && v < 100 && v < maxPlus) setMinPlus(v);
    else setError(createError(TaskType.PLUS_SIMPLE, anchorEl, TastErrorMessage.PLUS_MIN_01));
  }, []);

  const [maxPlus, setMaxPlus] = useState(exPanel?.maxPlus || 9); // До
  const changeMaxPlus = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const
      v = +e.target.value,
      anchorEl = e.currentTarget;

    if (v > 0 && v < 100 && v > minPlus) setMaxPlus(v);
    else setError(createError(TaskType.PLUS_SIMPLE, anchorEl, TastErrorMessage.PLUS_MAX_01));
  }, []);

  // ВЫЧИТАНИЕ
  const [qualMinusTasks, setQualMinusTasks] = useState(exPanel?.qualMinusTasks || 10); // Кол-во примеров вычитания
  const changeQualMinus = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const
      v = +e.target.value,
      anchorEl = e.currentTarget;

    if (v > 0 && v < 101) setQualMinusTasks(v);
    else setError(createError(TaskType.MINUS_SIMPLE, anchorEl, TastErrorMessage.MINUS_QUAL_01));
  }, []);

  const [minMinus, setMinMinus] = useState(exPanel?.minMinus || 3); // От 
  const changeMinMinus = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const
      v = +e.target.value,
      anchorEl = e.currentTarget;

    if (v > 0 && v < 100 && v < maxMinus) setMinMinus(v);
    else setError(createError(TaskType.MINUS_SIMPLE, anchorEl, TastErrorMessage.MINUS_MIN_01));
  }, []);

  const [maxMinus, setMaxMinus] = useState(exPanel?.maxMinus || 9); // До
  const changeMaxMinus = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const
      v = +e.target.value,
      anchorEl = e.currentTarget;

    if (v > 0 && v < 100 && v > minMinus) setMaxMinus(v);
    else setError(createError(TaskType.MINUS_SIMPLE, anchorEl, TastErrorMessage.MINUS_MAX_01));
  }, []);

  // ПРИМЕРЫ В 2 ДЕЙСТВИЯ
  const [qualMultyTasks, setQualMultyTasks] = useState(exPanel?.qualMultyTasks || 10); // Кол-во примеров в 2 действия
  const changeQualMulty = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const
      v = +e.target.value,
      anchorEl = e.currentTarget;

    if (v > 0 && v < 101) setQualMultyTasks(v);
    else setError(createError(TaskType.MINUS_SIMPLE, anchorEl, TastErrorMessage.TWO_QUAL_01));
  }, []);

  const [minMulty, setMinMulty] = useState(exPanel?.minMulty || 2); // От 
  const changeMinMulty = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const
      v = +e.target.value,
      anchorEl = e.currentTarget;

    if (v > 0 && v < 100 && v < maxMulty) setMinMulty(v);
    else setError(createError(TaskType.MINUS_SIMPLE, anchorEl, TastErrorMessage.TWO_MIN_01));
  }, []);

  const [maxMulty, setMaxMulty] = useState(exPanel?.maxMulty || 5); // До
  const changeMaxMulty = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const
      v = +e.target.value,
      anchorEl = e.currentTarget;

    if (v > 0 && v < 100 && v > minMulty) setMaxMulty(v);
    else setError(createError(TaskType.MINUS_SIMPLE, anchorEl, TastErrorMessage.TWO_MAX_01));
  }, []);


  // ЗАПУСК
  const handleCreate = (e: React.FormEvent) => {
    e.preventDefault();

    // Созданные примеры
    const tasks = [
      ...createPlusTasks(qualPlusTasks, minPlus, maxPlus),
      ...createMinusTasks(qualMinusTasks, minMinus, maxMinus),
      ...createMultyTasks(qualMultyTasks, minMulty, maxMulty)
    ];
    onSetTasks(tasks, { // Данные для exPanel
      qualPlusTasks, minPlus, maxPlus,
      qualMinusTasks, minMinus, maxMinus,
      qualMultyTasks, minMulty, maxMulty,
      lastTasks: tasks,
    });
  }
    
  // Очистка ошибки
  const handleClearError = () => setError({ message: undefined, taskType: undefined, anchorEl: null });


  return (
    <Card sx={sx.container}>
      <form onSubmit={handleCreate}>
        <TasksFormElem
          taskType     = {TaskType.PLUS_SIMPLE} 
          title        = 'Задачи по "Сложению"'
          error        = {error}
          qual         = {qualPlusTasks}
          min          = {minPlus}
          max          = {maxPlus}
          onChangeQual = {changeQualPlus}
          onChangeMin  = {changeMinPlus}
          onChangeMax  = {changeMaxPlus}
          onClearError = {handleClearError}
        />
        <TasksFormElem
          taskType     = {TaskType.MINUS_SIMPLE} 
          title        = 'Задачи по "Вычитанию"'
          error        = {error}
          qual         = {qualMinusTasks}
          min          = {minMinus}
          max          = {maxMinus}
          onChangeQual = {changeQualMinus}
          onChangeMin  = {changeMinMinus}
          onChangeMax  = {changeMaxMinus}
          onClearError = {handleClearError}
        />
        <TasksFormElem
          taskType     = {TaskType.TWO_ACTION}
          title        = 'Задачи в 2 действия'
          error        = {error}
          qual         = {qualMultyTasks}
          min          = {minMulty}
          max          = {maxMulty}
          onChangeQual = {changeQualMulty}
          onChangeMin  = {changeMinMulty}
          onChangeMax  = {changeMaxMulty}
          onClearError = {handleClearError}
        />
                
        <Button
          variant = 'contained'
          color   = 'secondary'
          sx      = {sx.inputBut}
          onClick = {handleCreate}
        >
          Создать
        </Button>
      </form>
    </Card>
  );
};

export default TasksForm;
