import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import type { PokemonData } from '../interfaces';
import Pokemon from '../functions/Pokemon';
import { fetchPokemon } from '../utils/pokemons';

function PokemonProfile() {
  const [data, setData] = useState<PokemonData>();
  const { id } = useParams();

  useEffect(() => {
    fetchPokemon(parseInt(id as string)).then(valeurPromise => {
      setData(valeurPromise);
    });
  }, []);

  if (!data) return <div>Loading</div>;

  return (
    <div>
      <h1>Pokemon {id}</h1>
      <Pokemon
        id={data.id}
        name={data.name}
        weight={data.weight}
        src={data?.sprites.front_default}
      />
    </div>
  );
}

export default PokemonProfile;
