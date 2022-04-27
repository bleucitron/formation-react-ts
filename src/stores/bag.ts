import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { PokemonData, TrainedPokemonData } from '../interfaces';

const bagSlice = createSlice({
  name: 'bag',
  initialState: [] as TrainedPokemonData[],
  reducers: {
    added: (state, { payload }: PayloadAction<PokemonData>) => [
      ...state,
      {
        id: Date.now(),
        species: payload,
      },
    ],
    removed: (state, { payload }: PayloadAction<number>) =>
      state.filter(pokemon => pokemon.id !== payload),
    cleared: () => [],
  },
});

export const { added, cleared, removed } = bagSlice.actions;

export default bagSlice;
