const { store } = require("./store");
const fromActions = require("./store/actions/root.action");

// SUBCRIBER
store.subscribe(() => {
  console.log("STATE ", store.getState());
});

// ACTION
store.dispatch({ type: fromActions.INCREMENT });

store.dispatch({
  type: fromActions.STORE_RESULT,
  ctr: store.getState().ctr.counter,
});

store.dispatch({ type: fromActions.DECREMENT });

store.dispatch({
  type: fromActions.STORE_RESULT,
  ctr: store.getState().ctr.counter,
});

store.dispatch({ type: fromActions.ADD_VALUE, value: 10 });

store.dispatch({
  type: fromActions.STORE_RESULT,
  ctr: store.getState().ctr.counter,
});

store.dispatch({ type: fromActions.DELETE_RESULT, index: 1 });

store.dispatch({ type: fromActions.DELETE_RESULT, index: 1 });

// { counter : 0, result : [] }
// { counter : 1, result : [] }
// { counter : 1, result : [1] }
// { counter : 0, result : [1] }
// { counter : 0, result : [1, 0] }
// { counter : 10, result : [1, 0] }
// { counter : 10, result : [1, 0, 10] }
