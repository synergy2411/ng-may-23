const fromActions = require("../actions/root.action");

const initialState = {
  counter: 0,
};

function counterReducer(state = initialState, action) {
  if (action.type === fromActions.INCREMENT) {
    return {
      ...state,
      counter: state.counter + 1,
    };
  } else if (action.type === fromActions.DECREMENT) {
    return {
      ...state,
      counter: state.counter - 1,
    };
  } else if (action.type === fromActions.ADD_VALUE) {
    return {
      ...state,
      counter: state.counter + action.value,
    };
  }
  return state;
}

module.exports = { counterReducer };
