import React, { useEffect, useState } from 'react';

import PokemonList from './PokemonList';
import Trainer from './Trainer';
import type { TrainedPokemonProps } from './TrainedPokemon';
import Filters from './Filters';
import fetchPokemons from '../utils/fetchPokemon';

export interface PokemonData {
  id: number;
  name: string;
  weight: number;
  sprites: {
    front_default: string;
  };
  types: any[];
}

function App() {
  const [isElectric, setIsElectric] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState<PokemonData[]>([]);
  const [bag, setBag] = useState<TrainedPokemonProps[]>([]);

  useEffect(() => {
    fetchPokemons().then(data => {
      setData(data);
      setIsLoading(false);
    });
  }, []);

  function catchPokemon(pokemon: PokemonData) {
    setBag(bag => [...bag, { id: Date.now(), species: pokemon }]);
  }

  const displayed = isElectric
    ? data.filter(item => item.types.find(t => t.type.name === 'electric'))
    : data;

  return (
    <div className="App">
      <Trainer
        name="Romain"
        address="1 rue des pokemons"
        bag={bag}
        clearBag={() => setBag([])}
      />
      <Filters
        label="Electric"
        isSelected={isElectric}
        toggle={() => setIsElectric(e => !e)}
      />
      {isLoading ? (
        'loading...'
      ) : (
        <PokemonList pokemons={displayed} catchPokemon={catchPokemon} />
      )}
    </div>
  );
}

export default App;
