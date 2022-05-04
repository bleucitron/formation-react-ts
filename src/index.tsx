import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout';
import App from './pages/App';
import About from './pages/About';
import PokemonProfile from './pages/PokemonProfile';
import store from './stores';

import './reset.css';
import './index.css';

// React 18:
const target = document.getElementById('root') as Element;
const root = ReactDOM.createRoot(target);

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<App />} />
          <Route path="about" element={<About />} />
          <Route path="pokemon">
            <Route path=":id" element={<PokemonProfile />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </Provider>,
);
