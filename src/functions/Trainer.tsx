import React from 'react';
import TrainedPokemon, {
  type TrainedPokemonProps,
} from '../functions/TrainedPokemon';

export interface TrainerProps {
  name: string;
  address: string;
  bag: TrainedPokemonProps[];
  clearBag(): void;
}

function Trainer(props: TrainerProps) {
  const { name, address, bag, clearBag } = props;

  const instances = bag.map(pokemon => (
    <TrainedPokemon key={pokemon.id} {...pokemon} />
  ));

  return (
    <div className="Trainer">
      <div className="name">{name}</div>
      <div className="address">{address}</div>
      <button onClick={clearBag}>Vider</button>
      <ul>{instances}</ul>
    </div>
  );
}

export default React.memo(Trainer);
