import { State } from 'app/providers/store/config/state';

export const selectStatusNavbar = (state: State) => state?.navbar?.statusNavbar || false
