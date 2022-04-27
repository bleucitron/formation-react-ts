import { configureStore } from '@reduxjs/toolkit';
import counterSlice from './count';
import bagSlice from './bag';
import type { TrainedPokemonData } from '../interfaces';

interface Store {
  counter: number;
  bag: TrainedPokemonData[];
}

export const counterSelect = (s: Store) => s.counter;
export const bagSelect = (s: Store) => s.bag;

const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    bag: bagSlice.reducer,
  },
});

export default store;
