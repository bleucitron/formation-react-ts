import React, { PureComponent, useState, useEffect } from 'react';

import Trainer from '../functions/Trainer';
import Filters from '../functions/Filters';
import PokemonList from '../functions/PokemonList';
import { fetchAll } from '../utils/pokemons';
import type { PokemonData, TrainedPokemonData } from '../interfaces';

function App() {
  const [active, setActive] = useState(false);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<PokemonData[]>([]);
  const [bag, setBag] = useState<TrainedPokemonData[]>([]);

  useEffect(() => {
    fetchAll().then(valeurPromise => {
      setLoading(false);
      setData(valeurPromise);
    });
  }, []);

  function toggle() {
    setActive(a => !a);
  }

  function catchPokemon(pokemon: PokemonData) {
    if (pokemon) {
      setBag(b => [
        ...b,
        {
          id: Date.now(),
          species: pokemon,
        },
      ]);
    }
  }

  function releasePokemon(id: number) {
    setBag(b => b.filter(p => p.id !== id));
  }

  const displayedList = active
    ? data.filter(pokemon =>
        pokemon.types.find(t => t.type.name === 'electric'),
      )
    : data;

  const content = loading ? (
    <div>Chargement</div>
  ) : (
    <>
      <Filters active={active} label="electric" toggle={toggle} />
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
      {content}
    </div>
  );
}
export default App;
