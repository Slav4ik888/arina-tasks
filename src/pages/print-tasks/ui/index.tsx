import { selectTasks } from 'entities/tasks/model'
import { TasksContainer } from 'entities/tasks';
import { useSelector } from 'react-redux'


export const PrintTasksPage = () => {
  const tasks = useSelector(selectTasks);


  return (
    <>
      <TasksContainer tasks={tasks} />
    </>
  )
}
