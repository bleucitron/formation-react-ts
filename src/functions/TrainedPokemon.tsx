import React, { useState, useEffect } from 'react';
import type { TrainedPokemonData } from '../interfaces';

interface TrainedPokemonProps extends TrainedPokemonData {
  releasePokemon(id: number): void;
}

function TrainedPokemon(props: TrainedPokemonProps) {
  const [exp, setExp] = useState(0);
  const [nickname, setNickname] = useState('');

  useEffect(() => {
    const id = setInterval(() => {
      setExp(e => e + 10);
    }, 100);

    return () => clearInterval(id);
  }, []);

  const {
    id,
    species: { name, weight, sprites },
    releasePokemon,
  } = props;

  const src = sprites.front_default;

  function gainExp() {
    setExp(e => e + 10);
  }
  function updateName(e: React.ChangeEvent<HTMLInputElement>) {
    setNickname(e.target.value);
  }

  return (
    <li className="TrainedPokemon" onMouseMove={gainExp}>
      <input value={nickname} onChange={updateName} />
      <div className="name">{nickname || name}</div>
      <div className="weight">{weight}</div>
      <div className="exp">{exp}</div>
      <button onClick={() => releasePokemon(id)}>Libérer</button>
      {src && <img src={src} alt={name} />}
    </li>
  );
}

export default TrainedPokemon;
