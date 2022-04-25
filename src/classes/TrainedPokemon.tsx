import React, { Component } from 'react';

export interface TrainedPokemonProps {
  name: string;
  weight: number;
  src?: string;
}

interface TrainedPokemonState {
  exp: number;
}

class TrainedPokemon extends Component<
  TrainedPokemonProps,
  TrainedPokemonState
> {
  constructor(p: TrainedPokemonProps) {
    super(p);

    this.state = {
      exp: 0,
    };

    this.displayName = this.displayName.bind(this);
    this.gainExp = this.gainExp.bind(this);
  }

  displayName() {
    console.log('Je suis', this.props.name);
  }

  gainExp() {
    this.setState({ exp: this.state.exp + 10 });
  }

  render() {
    const { name, weight, src } = this.props;
    const { exp } = this.state;

    return (
      <li
        className="TrainedPokemon"
        onClick={this.displayName}
        onMouseMove={this.gainExp}
      >
        <div className="name">{name}</div>
        <div className="weight">{weight}</div>
        <div className="exp">{exp}</div>
        {src && <img src={src} alt={name} />}
      </li>
    );
  }
}

export default TrainedPokemon;
