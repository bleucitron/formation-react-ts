import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { countSelector } from '../stores';
import {
  increment,
  decrement,
  incrementBy,
  decrementBy,
} from '../stores/count';

function Counter() {
  const value = useSelector(countSelector);
  const dispatch = useDispatch();

  function inc() {
    dispatch(increment());
  }
  function dec() {
    dispatch(decrement());
  }
  function incBy10() {
    dispatch(incrementBy(10));
  }
  function decBy10() {
    dispatch(decrementBy(10));
  }

  return (
    <div className="Counter">
      <button onClick={decBy10}>-10</button>
      <button onClick={dec}>-</button>
      <div className="value">{value}</div>
      <button onClick={inc}>+</button>
      <button onClick={incBy10}>+10</button>
    </div>
  );
}

export default Counter;
