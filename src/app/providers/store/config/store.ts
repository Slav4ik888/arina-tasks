import { configureStore } from '@reduxjs/toolkit'
import { navbarReducer } from 'features/navbar';
import { scheduleReducer } from 'features/schedule';
import { State } from './state';


export function createReduxStore(
  initialState? : State
) {

  const rootReducers = {
    navbar   : navbarReducer,
    schedule : scheduleReducer
  };

  const store = configureStore({
    reducer        : rootReducers,
    devTools       : __IS_DEV__,
    preloadedState : initialState || {}
  });

  return store
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
