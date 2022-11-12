import { State } from 'app/providers/store/config/state';

export const selectScheduleError = (state: State) => state?.schedule?.error || null
