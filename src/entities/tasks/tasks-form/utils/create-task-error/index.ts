import { TaskError, TaskType, TastErrorMessage } from '../../../model';

export const createError = (
  taskType: TaskType,
  anchorEl: Element,
  message: TastErrorMessage
): TaskError => ({
  taskType,
  anchorEl,
  message
})
