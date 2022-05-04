import React from 'react';
import { useSelector } from 'react-redux';
import { Link, Outlet } from 'react-router-dom';

import { bagSelector, countSelector } from '../stores';

function Layout() {
  const bag = useSelector(bagSelector);
  const count = useSelector(countSelector);

  return (
    <div className="layout">
      <nav>
        <Link to="/">Home</Link>
        <Link to="about">About</Link>
        <span>{count}</span>
        <span>Bag: {bag.length}</span>
      </nav>
      <Outlet />
    </div>
  );
}

export default Layout;
