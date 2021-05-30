import { createSlice } from '@reduxjs/toolkit';
const initialCounterState = { Counter: 0, ToggleCounter: true };
const counterSlice = createSlice({
  name: 'counter',
  initialState: initialCounterState,
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

export const counterActions = counterSlice.actions;
export const counterReducer = counterSlice.reducer;
