import { State } from 'app/providers/store/config/state';

export const selectStatusFooter = (state: State) => state?.navbar?.statusFooter || false
