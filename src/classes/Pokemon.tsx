import React, { Component } from 'react';

interface IPokemon {
  name: string;
  weight: number;
  src?: string;
}

class Pokemon extends Component<IPokemon> {
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
