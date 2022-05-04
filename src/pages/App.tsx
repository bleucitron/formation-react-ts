import React, { useState, useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Trainer from '../functions/Trainer';
import Filters from '../functions/Filters';
import Test from '../functions/Test';
import PokemonList from '../functions/PokemonList';
import { fetchAll } from '../utils/pokemons';
import type { PokemonData } from '../interfaces';
import { add, remove } from '../stores/bag';
import { bagSelector } from '../stores';

function App() {
  const [active, setActive] = useState('');
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<PokemonData[]>([]);

  const dispatch = useDispatch();
  const bag = useSelector(bagSelector);

  useEffect(() => {
    fetchAll().then(valeurPromise => {
      setLoading(false);
      setData(valeurPromise);
    });
  }, []);

  function toggle(label: string) {
    setActive(current => (current === label ? '' : label));
  }

  function catchPokemon(pokemon: PokemonData) {
    if (pokemon) {
      dispatch(add(pokemon));
    }
  }

  function releasePokemon(id: number) {
    dispatch(remove(id));
  }

  function findTypes(pokemons: PokemonData[]): string[] {
    const typesWithDuplicates = pokemons
      .map(item => item.types.map(t => t.type.name))
      .flat();
    return [...new Set(typesWithDuplicates)];
  }

  const types = useMemo(() => findTypes(data), [data]);

  const displayedList = active
    ? data.filter(pokemon => pokemon.types.find(t => t.type.name === active))
    : data;

  const content = loading ? (
    <div>Chargement</div>
  ) : (
    <>
      <Filters active={active} labels={types} toggle={toggle} />
      <PokemonList pokemons={displayedList} catchPokemon={catchPokemon} />
    </>
  );

  return (
    <div className="App">
      <Trainer
        name="Romain"
        address="1 rue des pokemons"
        bag={bag}
        releasePokemon={releasePokemon}
      />
      {/* <Test /> */}
      {content}
    </div>
  );
}
export default React.memo(App);
