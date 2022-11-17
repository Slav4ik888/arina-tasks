import { State } from 'app/providers/store/config/state';
import { StateTasks } from '../../types';

export const selectStateTasks = (state: State) => state?.stateTasks || {} as StateTasks;
