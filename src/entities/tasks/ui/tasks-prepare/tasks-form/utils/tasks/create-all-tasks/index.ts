import { Tasks, TaskType, TasksSettings } from '../../../../../../model';
import { createOneSubTasks, createOneAddTasks, createOneUnknownTasks } from '../create-one-action';
import { createTwoAddSubTasks, createTwoUnknownTasks } from '../create-two-actions';
import {  } from '../create-two-actions/unknown-tasks';


export const createAllTasks = (settings: TasksSettings): Tasks => [
  ...createOneAddTasks(
    settings[TaskType.ONE_ADD].amount,
    settings[TaskType.ONE_ADD].min,
    settings[TaskType.ONE_ADD].max
  ),
  ...createOneSubTasks(
    settings[TaskType.ONE_SUB].amount,
    settings[TaskType.ONE_SUB].min,
    settings[TaskType.ONE_SUB].max
  ),
  ...createOneUnknownTasks(
    settings[TaskType.ONE_UNKNOWN].amount,
    settings[TaskType.ONE_UNKNOWN].min,
    settings[TaskType.ONE_UNKNOWN].max
  ),
  ...createTwoAddSubTasks(
    settings[TaskType.TWO_ADD_SUB].amount,
    settings[TaskType.TWO_ADD_SUB].min,
    settings[TaskType.TWO_ADD_SUB].max
  ),
  ...createTwoUnknownTasks(
    settings[TaskType.TWO_UNKNOWN].amount,
    settings[TaskType.TWO_UNKNOWN].min,
    settings[TaskType.TWO_UNKNOWN].max
  ),
];
