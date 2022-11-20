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


/** Создание примеров В 2 ДЕЙСТВИЯ with One unknown digit */
export const TasksFormTwoUnknown: FC<Props> = memo((props) => {
  const { settings, error, onChangeSettings, setError, onClearError } = props;

  const handlerChangeAmount = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const
      v = +e.target.value,
      anchorEl = e.currentTarget;

    if (v >= 0 && v <= 101) onChangeSettings(TaskType.TWO_UNKNOWN, {
      ...settings[TaskType.TWO_UNKNOWN],
      amount: v
    });
    else setError(createError(TaskType.TWO_UNKNOWN, anchorEl, TastFormErrorMessage.TWO_QUAL_01));
  }, [settings]);


  const handlerChangeMin = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const
      v = +e.target.value,
      anchorEl = e.currentTarget,
      max = settings[TaskType.TWO_UNKNOWN].max

    if (v >= 0 && v <= 100 && v < max) onChangeSettings(TaskType.TWO_UNKNOWN, {
      ...settings[TaskType.TWO_UNKNOWN],
      min: v
    });
    else setError(createError(TaskType.TWO_UNKNOWN, anchorEl, TastFormErrorMessage.TWO_MIN_01));
  }, [settings]);


  const handlerChangeMax = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const
      v = +e.target.value,
      anchorEl = e.currentTarget,
      min = settings[TaskType.TWO_UNKNOWN].min;

    if (v >= 0 && v <= 100 && v > min) onChangeSettings(TaskType.TWO_UNKNOWN, {
      ...settings[TaskType.TWO_UNKNOWN],
      max: v
    });
    else setError(createError(TaskType.TWO_UNKNOWN, anchorEl, TastFormErrorMessage.TWO_MAX_01));
  }, [settings]);


  return (
    <TasksFormElem
      taskType       = {TaskType.TWO_UNKNOWN}
      title          = '"Сложение и вычитание" с одним неизвестным'
      description    = '1 + [ ] - 4 = 3, [ ] + 3 - 7 = 2'
      error          = {error}
      amount         = {settings[TaskType.TWO_UNKNOWN].amount}
      min            = {settings[TaskType.TWO_UNKNOWN].min}
      max            = {settings[TaskType.TWO_UNKNOWN].max}
      onChangeAmount = {handlerChangeAmount}
      onChangeMin    = {handlerChangeMin}
      onChangeMax    = {handlerChangeMax}
      onClearError   = {onClearError}
    />
  );
});
