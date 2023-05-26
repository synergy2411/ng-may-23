const { combineReducers } = require("redux");
const { counterReducer } = require("./counter.reducer");
const { resultReducer } = require("./result.reducer");

const rootReducer = combineReducers({
  ctr: counterReducer,
  res: resultReducer,
});

module.exports = { rootReducer };
