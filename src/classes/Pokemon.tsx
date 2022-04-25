import React, { Component } from 'react';

export interface PokemonProps {
  name: string;
  weight: number;
  src?: string;
}

export interface PokemonState {
  age: number;
}

class Pokemon extends Component<PokemonProps, PokemonState> {
  render() {
    const { name, weight, src } = this.props;

    function displayName() {
      console.log('Je suis', name);
    }

    return (
      <li className="Pokemon" onClick={displayName}>
        <div className="name">{name}</div>
        <div className="weight">{weight}</div>
        {src && <img src={src} alt={name} />}
      </li>
    );
  }
}

export default Pokemon;
