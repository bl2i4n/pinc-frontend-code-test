import initialState from './initialState';
import {FETCH_DATA, RECEIVE_DATA} from '../actions/actionTypes';

export default function data(state = initialState.data, action) {
  let newState;
  switch (action.type) {
    case FETCH_DATA:
      console.log('FETCH_DATA Action')
      return action;
    case RECEIVE_DATA:
      newState = action.data;
      console.log('RECEIVE_DATA Action')
      return newState;
    default:
      return state;
  }
}
