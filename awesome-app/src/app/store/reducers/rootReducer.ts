import { Action } from '@ngrx/store';
import * as fromActions from '../actions/root.actions';

const initialState = {
  counter: 0,
};

export function rootReducer(state = initialState, action: Action) {
  switch (action.type) {
    case fromActions.INCREMENT: {
      return {
        counter: state.counter + 1,
      };
    }
    case fromActions.DECREMENT: {
      return {
        counter: state.counter - 1,
      };
    }
    default:
      break;
  }
  return state;
}
