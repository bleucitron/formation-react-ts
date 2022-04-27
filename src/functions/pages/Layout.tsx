import React from 'react';
import { useSelector } from 'react-redux';

import { Outlet, Link } from 'react-router-dom';
import { bagSelect, counterSelect } from '../../stores';

export default function Layout() {
  const bag = useSelector(bagSelect);
  const counter = useSelector(counterSelect);

  return (
    <>
      <header>
        <div className="flex">
          <div>Poke App</div>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/pokemon/31">??</Link>
          </nav>
        </div>

        <div className="flex">
          <div>Counter: {counter}</div>
          <div>Store count: {bag.length}</div>
        </div>
      </header>
      <Outlet />
    </>
  );
}
