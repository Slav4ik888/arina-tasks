import { extend } from '../utils/objects';


const initialState = {
  navbar: true,
};

export const ActionType = {
  NAVBAR_ON: `NAVBAR_ON`,
  NAVBAR_OFF: `NAVBAR_OFF`,
};

export const ActionCreator = {
  setNavbarOn: () => ({ type: ActionType.NAVBAR_ON }),
  setNavbarOff: () => ({ type: ActionType.NAVBAR_OFF }),

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
    
    default: return state;
  }
};
