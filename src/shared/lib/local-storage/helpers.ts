import { Schedule, TodoList } from 'features/schedule';
import { setStorageData, getStorageData } from './main';


export const setSchedule  = (data: Schedule) => setStorageData('schedule', data);
export const getSchedule  = (): Schedule     => getStorageData('schedule') as Schedule;

export const setTodolist  = (data: TodoList) => setStorageData('schedule', data);
export const getTodolist  = (): TodoList     => getStorageData('schedule') as TodoList;
