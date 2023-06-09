import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: { count: 0 },
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      if (state.count > 0) {
        state.count -= 1;
      }
    },
    IncrementByAmount: (state, { payload }) => {
      state.count += payload;
    },
  },
});

export const { increment, decrement, IncrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;
