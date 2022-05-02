import React from 'react';
// import ReactDOM from 'react-dom';
import ReactDOM from 'react-dom/client';
import App from './classes/App';

import data from './_data/pokemon.json';

import './reset.css';
import './index.css';

// ReactDOM.render(<App data={data} />, document.getElementById('root'));

// React 18:
const target = document.getElementById('root') as Element;
const root = ReactDOM.createRoot(target);
root.render(<App data={data} />);
