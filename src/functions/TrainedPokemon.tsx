import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import type { TrainedPokemonData } from '../interfaces';
import { useIntervalExp } from '../utils/hooks';
import { removed } from '../stores/bag';

export interface TrainedPokemonProps extends TrainedPokemonData {}

function TrainedPokemon({
  id,
  species: {
    name,
    weight,
    sprites: { front_default: src },
  },
}: TrainedPokemonProps) {
  const [exp, setExp] = useIntervalExp(0);
  const [nickname, setNickname] = useState('');
  const dispatch = useDispatch();

  function remove(id: number) {
    dispatch(removed(id));
  }

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
      <button onClick={() => remove(id)}>Release</button>
      <div>{name}</div>
    </li>
  );
}

export default TrainedPokemon;
