import React, { useState } from 'react';
import type { PokemonData } from './App';
import { useIntervalExp } from '../utils/hooks';

export interface TrainedPokemonProps {
  id: number;
  species: PokemonData;
}

function TrainedPokemon({
  species: {
    name,
    weight,
    sprites: { front_default: src },
  },
}: TrainedPokemonProps) {
  const [exp, setExp] = useIntervalExp(0);
  const [nickname, setNickname] = useState('');

  function changeNickname(e: React.ChangeEvent<HTMLInputElement>) {
    setNickname(e.target.value);
  }

  return (
    <li className="TrainedPokemon" onMouseMove={() => setExp(xp => xp + 10)}>
      <input value={nickname} onChange={changeNickname} />
      <div className="name">{nickname || name}</div>
      <div className="weight">{weight}</div>
      <div className="exp">{exp}</div>
      {src && <img src={src} alt={name} />}
      <div>{name}</div>
    </li>
  );
}

export default TrainedPokemon;
