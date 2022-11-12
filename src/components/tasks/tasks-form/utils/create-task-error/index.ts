import { TaskError, TaskType, TastErrorMessage } from 'app/types';

export const createError = (
  taskType: TaskType,
  anchorEl: Element,
  message: TastErrorMessage
): TaskError => ({
  taskType,
  anchorEl,
  message
})
