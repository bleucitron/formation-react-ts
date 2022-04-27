import { useDispatch } from 'react-redux';
import {
  incremented,
  decremented,
  incrementedBy,
  decrementedBy,
} from '../stores/count';

export default function Counter() {
  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => dispatch(decremented())}>-</button>
      <button onClick={() => dispatch(decrementedBy(10))}>-10</button>
      <button onClick={() => dispatch(incremented())}>+</button>
      <button onClick={() => dispatch(incrementedBy(18))}>+18</button>
    </div>
  );
}
