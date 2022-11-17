import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { StateNavbar } from '../types';

const initialState: StateNavbar = {
  statusNavbar : true,
  statusFooter : true
};


const slice = createSlice({
  name: 'navbar',
  initialState,
  reducers: {
    setStatusNavbar: (state, { payload }: PayloadAction<boolean>) => {
      state.statusNavbar = payload;
    },
    setStatusFooter: (state, { payload }: PayloadAction<boolean>) => {
      state.statusFooter = payload;
    }
  }
});

export const {
  actions: navbarActions,
  reducer: navbarReducer
} = slice;
