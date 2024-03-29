import { StateTasks } from 'entities/tasks/model';
import { StateNavbar } from 'features/navbar';
import { StateSchedule } from 'features/schedule';



export interface State {
  navbar     : StateNavbar
  schedule   : StateSchedule
  stateTasks : StateTasks
}
