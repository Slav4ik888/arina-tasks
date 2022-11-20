import { FC, ChangeEvent, memo, useCallback } from 'react';
// Components
import TasksFormElem from '../../tasks-form-elem';
// Functions
import { createError } from '../../utils';
// Types
import { TaskFormError, TaskSettingsElement, TasksSettings, TaskType, TastFormErrorMessage } from '../../../../../model';



type Props = {
  error            : TaskFormError
  settings         : TasksSettings
  onChangeSettings : (type: TaskType, value: TaskSettingsElement) => void
  setError         : (e: TaskFormError) => void
  onClearError     : () => void
}


/** Создание примеров на СЛОЖЕНИЕ */
export const TasksFormAddition: FC<Props> = memo((props) => {
  const { settings, error, onChangeSettings, setError, onClearError } = props;

  const handlerChangeAmount = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const
      v = +e.target.value,
      anchorEl = e.currentTarget;

    if (v >= 0 && v <= 100) onChangeSettings(TaskType.ONE_ADD, {
      ...settings[TaskType.ONE_ADD],
      amount: v
    });
    else setError(createError(TaskType.ONE_ADD, anchorEl, TastFormErrorMessage.PLUS_QUAL_01));
  }, [settings]);


  const handlerChangeMin = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const
      v = +e.target.value,
      anchorEl = e.currentTarget,
      max = settings[TaskType.ONE_ADD].max;

    if (v >= 0 && v <= 100 && v < max) onChangeSettings(TaskType.ONE_ADD, {
      ...settings[TaskType.ONE_ADD],
      min: v
    });
    else setError(createError(TaskType.ONE_ADD, anchorEl, TastFormErrorMessage.PLUS_MIN_01));
  }, [settings]);


  const handlerChangeMax = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const
      v = +e.target.value,
      anchorEl = e.currentTarget,
      min = settings[TaskType.ONE_ADD].min;

    if (v >= 0 && v <= 100 && v > min) onChangeSettings(TaskType.ONE_ADD, {
      ...settings[TaskType.ONE_ADD],
      max: v
    });
    else setError(createError(TaskType.ONE_ADD, anchorEl, TastFormErrorMessage.PLUS_MAX_01));
  }, [settings]);

  
  return (
    <TasksFormElem
      taskType       = {TaskType.ONE_ADD} 
      title          = '"Сложение"'
      description    = '1 + 2'
      error          = {error}
      amount         = {settings[TaskType.ONE_ADD].amount}
      min            = {settings[TaskType.ONE_ADD].min}
      max            = {settings[TaskType.ONE_ADD].max}
      onChangeAmount = {handlerChangeAmount}
      onChangeMin    = {handlerChangeMin}
      onChangeMax    = {handlerChangeMax}
      onClearError   = {onClearError}
    />
  );
});
