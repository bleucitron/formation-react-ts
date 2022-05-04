import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { TrainedPokemonData, PokemonData } from '../interfaces';

const bagSlice = createSlice({
  name: 'bag',
  initialState: [] as TrainedPokemonData[],
  reducers: {
    add: (bag, { payload }: PayloadAction<PokemonData>) => [
      ...bag,
      {
        id: Date.now(),
        species: payload,
      },
    ],
    remove: (b, { payload }: PayloadAction<number>) =>
      b.filter(p => p.id !== payload),
  },
});

export const { add, remove } = bagSlice.actions;

export default bagSlice.reducer;
