import React from 'react';
import ReactDOM from 'react-dom/client';

import _data from './_data/pokemon.json';

import App, { type PokemonData } from './classes/App';

import './reset.css';
import './index.css';

const data = _data as PokemonData[];

const target = document.getElementById('root') as Element;
const root = ReactDOM.createRoot(target);

// ReactDOM.render(<App data={data} />, target);

root.render(<App data={data} />);
