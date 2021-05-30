import { configureStore } from '@reduxjs/toolkit';
import { counterReducer } from '../store/counter';
import { authReducer } from '../store/auth';
// import { createStore } from 'redux';

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
  //reducer: counterSlice.reducer,
  reducer: {
    counter: counterReducer,
    auth: authReducer,
  },
});

export default store;
