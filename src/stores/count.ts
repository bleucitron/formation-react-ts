import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: 43,
  reducers: {
    incremented: state => state + 1,
    decremented: state => state - 1,
    incrementedBy: (state, { payload }) => state + payload,
    decrementedBy: (state, { payload }) => state - payload,
  },
});

export const { incremented, decremented, incrementedBy, decrementedBy } =
  counterSlice.actions;

export default counterSlice;
