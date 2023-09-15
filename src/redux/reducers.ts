import { combineReducers } from 'redux';
import { ActionTypes } from './types';

const numberReducer = (state: number | null = null, action: ActionTypes) => {
  switch (action.type) {
    case 'RECEIVE_NUMBER':
      return action.payload;
    default:
      return state;
  }
};

export default combineReducers({
  number: numberReducer,
});