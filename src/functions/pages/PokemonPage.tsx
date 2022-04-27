import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import type { PokemonData } from '../../interfaces';
import Pokemon from '../Pokemon';
import { fetchPokemon } from '../../utils/fetchPokemon';

export default function PokemonPage() {
  const { id } = useParams();
  const [data, setData] = useState<PokemonData>();

  useEffect(() => {
    fetchPokemon(parseInt(id as string)).then(data => setData(data));
  }, []);

  return (
    <div className="PokemonPage">
      {data ? <Pokemon {...data} /> : 'loading...'}
    </div>
  );
}
