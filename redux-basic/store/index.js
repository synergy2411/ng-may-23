const { createStore } = require("redux");
const { rootReducer } = require("./reducers/root.reducer");

// STORE
const store = createStore(rootReducer);

module.exports = { store };
