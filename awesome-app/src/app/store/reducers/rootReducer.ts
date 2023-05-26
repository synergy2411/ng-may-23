import { Action } from '@ngrx/store';
import * as fromActions from '../actions/root.actions';

const initialState = {
  counter: 0,
  result: [],
};

export function rootReducer(
  state = initialState,
  action: fromActions.ActionType
) {
  switch (action.type) {
    case fromActions.INCREMENT: {
      return {
        ...state,
        counter: state.counter + 1,
      };
    }
    case fromActions.DECREMENT: {
      return {
        ...state,
        counter: state.counter - 1,
      };
    }
    case fromActions.ADD_COUNTER: {
      return {
        ...state,
        counter: state.counter + action.payload,
      };
    }
    case fromActions.SUBTRACT_COUNTER: {
      return {
        ...state,
        counter: state.counter - action.payload,
      };
    }

    case fromActions.STORE_RESULT: {
      console.log('ACTION', action);
      return {
        ...state,
        result: [action.payload, ...state.result],
      };
    }
    case fromActions.DELETE_RESULT: {
      const filteredResult = state.result.filter(
        (r, i) => i !== action.payload
      );
      return {
        ...state,
        result: filteredResult,
      };
    }

    default:
      return state;
  }
}
