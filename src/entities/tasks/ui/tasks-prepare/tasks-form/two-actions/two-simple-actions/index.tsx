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


/** Создание примеров В 2 ДЕЙСТВИЯ */
export const TasksFormTwoSimpleActions: FC<Props> = memo((props) => {
  const { settings, error, onChangeSettings, setError, onClearError } = props;

  const handlerChangeAmount = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const
      v = +e.target.value,
      anchorEl = e.currentTarget;

    if (v >= 0 && v <= 101) onChangeSettings(TaskType.TWO_ADD_SUB, {
      ...settings[TaskType.TWO_ADD_SUB],
      amount: v
    });
    else setError(createError(TaskType.TWO_ADD_SUB, anchorEl, TastFormErrorMessage.TWO_QUAL_01));
  }, [settings]);


  const handlerChangeMin = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const
      v = +e.target.value,
      anchorEl = e.currentTarget,
      max = settings[TaskType.TWO_ADD_SUB].max

    if (v >= 0 && v <= 100 && v < max) onChangeSettings(TaskType.TWO_ADD_SUB, {
      ...settings[TaskType.TWO_ADD_SUB],
      min: v
    });
    else setError(createError(TaskType.TWO_ADD_SUB, anchorEl, TastFormErrorMessage.TWO_MIN_01));
  }, [settings]);


  const handlerChangeMax = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const
      v = +e.target.value,
      anchorEl = e.currentTarget,
      min = settings[TaskType.TWO_ADD_SUB].min;

    if (v >= 0 && v <= 100 && v > min) onChangeSettings(TaskType.TWO_ADD_SUB, {
      ...settings[TaskType.TWO_ADD_SUB],
      max: v
    });
    else setError(createError(TaskType.TWO_ADD_SUB, anchorEl, TastFormErrorMessage.TWO_MAX_01));
  }, [settings]);


  return (
    <TasksFormElem
      taskType       = {TaskType.TWO_ADD_SUB}
      title          = '"Сложение и вычитание"'
      description    = '1 + 2 + 3, 4 - 2 - 1, 3 - 2 + 4'
      error          = {error}
      amount         = {settings[TaskType.TWO_ADD_SUB].amount}
      min            = {settings[TaskType.TWO_ADD_SUB].min}
      max            = {settings[TaskType.TWO_ADD_SUB].max}
      onChangeAmount = {handlerChangeAmount}
      onChangeMin    = {handlerChangeMin}
      onChangeMax    = {handlerChangeMax}
      onClearError   = {onClearError}
    />
  );
});
