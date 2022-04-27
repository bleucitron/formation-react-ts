import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import TrainedPokemon from '../functions/TrainedPokemon';

import { bagSelect } from '../stores';
import { cleared } from '../stores/bag';

export interface TrainerProps {
  name: string;
  address: string;
}

function Trainer(props: TrainerProps) {
  const { name, address } = props;
  const bag = useSelector(bagSelect);
  const dispatch = useDispatch();

  function clear() {
    dispatch(cleared());
  }

  const instances = bag.map(pokemon => (
    <TrainedPokemon key={pokemon.id} {...pokemon} />
  ));

  return (
    <div className="Trainer">
      <div className="name">{name}</div>
      <div className="address">{address}</div>
      <button onClick={clear}>Vider</button>
      <ul>{instances}</ul>
    </div>
  );
}

export default React.memo(Trainer);
