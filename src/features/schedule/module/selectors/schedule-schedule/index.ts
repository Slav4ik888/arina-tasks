import { State } from 'app/providers/store/config/state';

export const selectScheduleSchedule = (state: State) => state?.schedule?.schedule || []
