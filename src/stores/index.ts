import { configureStore } from '@reduxjs/toolkit';
import type { TrainedPokemonData } from '../interfaces';

import countSlice from './count';
import bagSlice from './bag';

interface Store {
  count: number;
  bag: TrainedPokemonData[];
}

export const countSelector = (s: Store) => s.count;
export const bagSelector = (s: Store) => s.bag;

const store = configureStore({
  reducer: {
    count: countSlice,
    bag: bagSlice,
  },
});

export default store;
