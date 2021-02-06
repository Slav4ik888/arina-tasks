import { extend } from '../utils/objects';


const initialState = {
  navbar: true,
  schedule: [], // Расписание
  todoList: [], // Список возможных дел
  error: {

  },
};

export const ActionType = {
  NAVBAR_ON: `NAVBAR_ON`,
  NAVBAR_OFF: `NAVBAR_OFF`,
  SET_SCHEDULE: `SET_SCHEDULE`, 
  SET_TODOLIST: `SET_TODOLIST`,
  SET_ERROR: `SET_ERROR`,
  CLEAR_ERROR: `CLEAR_ERROR`,
};

export const ActionCreator = {
  setNavbarOn: () => ({ type: ActionType.NAVBAR_ON }),
  setNavbarOff: () => ({ type: ActionType.NAVBAR_OFF }),
  setSchedule: (schedule) => ({
    type: ActionType.SET_SCHEDULE,
    payload: schedule
  }),
  setTodoList: (todoList) => ({
    type: ActionType.SET_TODOLIST,
    payload: todoList
  }),
  setError: (error) => ({
    type: ActionType.SET_ERROR,
    payload: error
  }),
  clearError: () => ({
    type: ActionType.CLEAR_ERROR,
  }),
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.NAVBAR_ON:
      return extend(state, {
        navbar: true,
      });
    
    case ActionType.NAVBAR_OFF:
      return extend(state, {
        navbar: false,
      });
    
    case ActionType.SET_SCHEDULE:
      return extend(state, {
        schedule: action.payload,
      });
    
    case ActionType.SET_TODOLIST:
      return extend(state, {
        todoList: action.payload,
      });
    
    case ActionType.SET_ERROR:
      return extend(state, {
        error: action.payload,
      });
    
    case ActionType.CLEAR_ERROR:
      return extend(state, {
        error: {},
      });
    
    default: return state;
  }
};
