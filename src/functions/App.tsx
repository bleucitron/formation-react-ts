import React, { useEffect, useState, useMemo } from 'react';
import { useDispatch } from 'react-redux';

import PokemonList from './PokemonList';
import Trainer from './Trainer';
import type { PokemonData } from '../interfaces';
import Filters from './Filters';
import Counter from './Counter';
import { fetchAll } from '../utils/fetchPokemon';
import { added } from '../stores/bag';

function App() {
  const dispatch = useDispatch();
  const [selected, setSelected] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState<PokemonData[]>([]);

  useEffect(() => {
    fetchAll().then(data => {
      setData(data);
      setIsLoading(false);
    });
  }, []);

  function catchPokemon(pokemon: PokemonData) {
    dispatch(added(pokemon));
  }

  function selectType(t: string) {
    if (selected === t) {
      setSelected('');
    } else {
      setSelected(t);
    }
  }

  const types = useMemo(() => {
    const duplicateTypes = data.map(p => p.types.map(t => t.type.name)).flat();
    return [...new Set(duplicateTypes)];
  }, [data]);

  const displayed = selected
    ? data.filter(item => item.types.find(t => t.type.name === selected))
    : data;

  return (
    <div className="App">
      <Trainer name="Romain" address="1 rue des pokemons" />
      <Counter />
      <Filters types={types} selected={selected} select={selectType} />
      {isLoading ? (
        'loading...'
      ) : (
        <PokemonList pokemons={displayed} catchPokemon={catchPokemon} />
      )}
    </div>
  );
}

export default App;
