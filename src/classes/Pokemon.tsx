import React, { PureComponent } from 'react';

interface PokemonProps {
  id: number;
  name: string;
  weight: number;
  src?: string;
  catchPokemon(): void;
}

class Pokemon extends PureComponent<PokemonProps> {
  render() {
    const { name, weight, src, catchPokemon } = this.props;

    return (
      <li className="Pokemon" onClick={catchPokemon}>
        <div className="name">{name}</div>
        <div className="weight">{weight}</div>
        {src && <img src={src} alt={name} />}
      </li>
    );
  }
}

export default Pokemon;
