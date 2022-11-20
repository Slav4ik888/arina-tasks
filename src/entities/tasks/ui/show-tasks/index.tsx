import { FC } from 'react';
// Components
import TasksContainerHeader from './tasks-container-header';
import { TasksContainer } from './tasks-container';
import { ControlPanel } from './control-panel';
// Types
import { Tasks, TaskShowType } from '../../model';



type Props = {
  tasks        : Tasks
  onClearTasks : () => void
}


export const ShowTasks: FC<Props> = ({ tasks, onClearTasks }) => (
  <>
    <TasksContainerHeader />
    <TasksContainer type={TaskShowType.SHOW} tasks={tasks} />
    <ControlPanel onClearTasks={onClearTasks} />
  </>
);
