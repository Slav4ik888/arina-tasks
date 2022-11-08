import { State } from 'app/providers/store/config/state';

export const selectNavbarStatus = (state: State) => state?.navbar?.status || false
