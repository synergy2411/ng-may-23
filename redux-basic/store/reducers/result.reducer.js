const initialState = {
  result: [],
};

function resultReducer(state = initialState, action) {
  if (action.type === "STORE_RESULT") {
    return {
      ...state,
      result: [action.ctr, ...state.result],
    };
  } else if (action.type === "DELETE_RESULT") {
    const filteredResult = state.result.filter((r, i) => i !== action.index);
    return {
      ...state,
      result: filteredResult,
    };
  }
  return state;
}

module.exports = { resultReducer };
