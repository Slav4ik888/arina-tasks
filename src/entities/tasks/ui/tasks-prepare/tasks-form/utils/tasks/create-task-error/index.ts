import { TaskFormError, TaskType, TastFormErrorMessage } from '../../../../../../model';

export const createError = (
  taskType: TaskType,
  anchorEl: Element,
  message: TastFormErrorMessage
): TaskFormError => ({
  taskType,
  anchorEl,
  message
})
