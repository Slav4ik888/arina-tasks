import { ExPanel } from 'entities/tasks';
import { Schedule, TodoList } from 'features/schedule';
import { setStorageData, getStorageData } from './main';

enum Name {
  SCHEDULE  = 'schedule',
  TODO_LIST = 'todo_list',
  EX_PANEL  = 'ex-panel'
}

export const setSchedule  = (data: Schedule) => setStorageData(Name.SCHEDULE, data);
export const getSchedule  = (): Schedule     => getStorageData(Name.SCHEDULE) as Schedule;

export const setTodolist  = (data: TodoList) => setStorageData(Name.TODO_LIST, data);
export const getTodolist  = (): TodoList     => getStorageData(Name.TODO_LIST) as TodoList;

export const setExPanel = (data: ExPanel)    => setStorageData(Name.EX_PANEL, data);
export const getExPanel = (): ExPanel        => getStorageData(Name.EX_PANEL) as ExPanel;
