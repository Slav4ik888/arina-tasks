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


/** Создание примеров на ВЫЧИТАНИЕ */
export const TasksFormSubtraction: FC<Props> = memo((props) => {
  const { settings, error, onChangeSettings, setError, onClearError } = props;

  const handlerChangeAmount = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const
      v = +e.target.value,
      anchorEl = e.currentTarget;

    if (v >= 0 && v <= 101) onChangeSettings(TaskType.ONE_SUB, {
      ...settings[TaskType.ONE_SUB],
      amount: v
    });
    else setError(createError(TaskType.ONE_SUB, anchorEl, TastFormErrorMessage.MINUS_QUAL_01));
  }, [settings]);


  const handlerChangeMin = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const
      v = +e.target.value,
      anchorEl = e.currentTarget,
      max = settings[TaskType.ONE_SUB].max;

    if (v >= 0 && v <= 100 && v < max) onChangeSettings(TaskType.ONE_SUB, {
      ...settings[TaskType.ONE_SUB],
      min: v
    });
    else setError(createError(TaskType.ONE_SUB, anchorEl, TastFormErrorMessage.MINUS_MIN_01));
  }, [settings]);


  const handlerChangeMax = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const
      v = +e.target.value,
      anchorEl = e.currentTarget,
      min = settings[TaskType.ONE_SUB].min

    if (v >= 0 && v <= 100 && v > min) onChangeSettings(TaskType.ONE_SUB, {
      ...settings[TaskType.ONE_SUB],
      max: v
    });
    else setError(createError(TaskType.ONE_SUB, anchorEl, TastFormErrorMessage.MINUS_MAX_01));
  }, [settings]);

  
  return (
    <TasksFormElem
      taskType       = {TaskType.ONE_SUB} 
      title          = '"Вычитание"'
      description    = '2 - 1'
      error          = {error}
      amount         = {settings[TaskType.ONE_SUB].amount}
      min            = {settings[TaskType.ONE_SUB].min}
      max            = {settings[TaskType.ONE_SUB].max}
      onChangeAmount = {handlerChangeAmount}
      onChangeMin    = {handlerChangeMin}
      onChangeMax    = {handlerChangeMax}
      onClearError   = {onClearError}
    />
  );
});
