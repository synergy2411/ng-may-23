const { createStore } = require("redux");

// Reducer

const initialState = {
  counter: 0,
};

function rootReducer(state = initialState, action) {
  if (action.type === "INCREMENT") {
    return {
      counter: state.counter + 1,
    };
  } else if (action.type === "DECREMENT") {
    return {
      counter: state.counter - 1,
    };
  } else if (action.type === "ADD_VALUE") {
    return {
      counter: state.counter + action.value,
    };
  }
  return state;
}

// STORE
const store = createStore(rootReducer);

// SUBCRIBER
store.subscribe(() => {
  console.log("STATE ", store.getState());
});

// ACTION
store.dispatch({ type: "INCREMENT" });

console.log("AFTER INCREMENT ", store.getState());

store.dispatch({ type: "DECREMENT" });

store.dispatch({ type: "ADD_VALUE", value: 10 });
