import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { StateNavbar } from '../types';

const initialState: StateNavbar = {
  status: true
};


const slice = createSlice({
  name: 'navbar',
  initialState,
  reducers: {
    setStatus: (state, { payload }: PayloadAction<boolean>) => {
      state.status = payload;
    }
  }
});

export const {
  actions: navbarActions,
  reducer: navbarReducer
} = slice;
