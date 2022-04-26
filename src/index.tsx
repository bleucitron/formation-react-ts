import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './functions/App';

import './reset.css';
import './index.css';

const target = document.getElementById('root') as Element;
const root = ReactDOM.createRoot(target);

// ReactDOM.render(<App data={data} />, target);

root.render(<App />);
