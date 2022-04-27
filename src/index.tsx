import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import App from './functions/App';
import PokemonPage from './functions/pages/PokemonPage';
import Layout from './functions/pages/Layout';
import store from './stores';

import './reset.css';
import './index.css';

const target = document.getElementById('root') as Element;
const root = ReactDOM.createRoot(target);

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<App />} />
          <Route path="pokemon/:id" element={<PokemonPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </Provider>,
);
