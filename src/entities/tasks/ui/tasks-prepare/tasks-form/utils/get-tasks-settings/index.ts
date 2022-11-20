import { noUndefined } from 'shared/lib/validators';
import { ExPanel, TasksSettings, TaskType } from '../../../../../model';


const getDefault = (exPanel: ExPanel, type: TaskType) => ({
  amount : noUndefined(exPanel?.[type]?.amount) ? exPanel?.[type]?.amount : 10,
  min    : noUndefined(exPanel?.[type]?.min)    ? exPanel?.[type]?.min    : 3,
  max    : noUndefined(exPanel?.[type]?.max)    ? exPanel?.[type]?.max    : 9
});


export const getTasksSettings = (exPanel: ExPanel): TasksSettings => {
  const
    obj = {} as TasksSettings;
    
  Object
    .values(TaskType)
    .forEach(type => obj[type] = getDefault(exPanel, type));

  return obj;
};
