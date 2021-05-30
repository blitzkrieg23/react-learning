import { createSlice, configureStore } from '@reduxjs/toolkit';
// import { createStore } from 'redux';
const initialState = { Counter: 0, ToggleCounter: true };
const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment(state) {
      state.Counter++;
    },
    decrement(state) {
      state.Counter--;
    },
    increase(state, action) {
      state.Counter = state.Counter + action.payload;
    },
    toggleCounter(state) {
      state.ToggleCounter = !state.ToggleCounter;
    },
  },
});

// const counterReducer = (state = initialState, action) => {
//   if (action.type === 'increment') {
//     return {
//       Counter: +state.Counter + 1,
//       ToggleCounter: state.ToggleCounter,
//     };
//   }
//   if (action.type === 'increase') {
//     return {
//       Counter: +state.Counter + action.amount,
//       ToggleCounter: state.ToggleCounter,
//     };
//   }
//   if (action.type === 'decrement') {
//     return {
//       Counter: +state.Counter - 1,
//       ToggleCounter: state.ToggleCounter,
//     };
//   }
//   if (action.type === 'toggle') {
//     return {
//       Counter: +state.Counter,
//       ToggleCounter: !state.ToggleCounter,
//     };
//   }
//   return state;
// };

const store = configureStore({
  reducer: counterSlice.reducer,
});
export const counterActions = counterSlice.actions;
export default store;
