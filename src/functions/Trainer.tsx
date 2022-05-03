import React from 'react';
import TrainedPokemon from '../functions/TrainedPokemon';
import type { TrainedPokemonData } from '../interfaces';

interface TrainerProps {
  name: string;
  address: string;
  bag: TrainedPokemonData[];
  releasePokemon(id: number): void;
}

function Trainer({
  name,
  address,
  bag,
  releasePokemon,
}: TrainerProps): JSX.Element {
  const instances = bag.map(pokemon => (
    <TrainedPokemon
      key={pokemon.id}
      {...pokemon}
      releasePokemon={releasePokemon}
    />
  ));

  return (
    <div className="Trainer">
      <div className="name">{name}</div>
      <div className="address">{address}</div>
      <ul className="list">{instances}</ul>
    </div>
  );
}

export default React.memo(Trainer);
