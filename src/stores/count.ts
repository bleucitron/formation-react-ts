import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const countSlice = createSlice({
  name: 'count',
  initialState: 100 as number,
  reducers: {
    increment: c => c + 1,
    decrement: c => c - 1,
    incrementBy: (c, { payload }: PayloadAction<number>) => c + payload,
    decrementBy: (c, { payload }: PayloadAction<number>) => c - payload,
  },
});

export const { increment, decrement, incrementBy, decrementBy } =
  countSlice.actions;

export default countSlice.reducer;
