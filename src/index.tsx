import React from 'react';
import ReactDOM from 'react-dom';

import './reset.css';
import './index.css';

const pokemon = <div>Pikachu</div>;

ReactDOM.render(pokemon, document.getElementById('root'));

/**
 * // React 18:
 * const target = document.getElementById('root') as Element;
 * const root = ReactDOM.createRoot(target);
 * root.render(pokemon);
 */
