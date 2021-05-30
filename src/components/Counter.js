import classes from './Counter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { counterActions } from '../state/index';
const Counter = () => {
  const counter = useSelector((state) => state.Counter);
  const show = useSelector((state) => state.ToggleCounter);

  const dispatch = useDispatch();
  const toggleCounterHandler = () => {
    //dispatch({ type: 'toggle' });
    dispatch(counterActions.toggleCounter());
  };

  const incrementHandler = () => {
    dispatch(counterActions.increment());
    //dispatch({ type: 'increment' });
  };
  const decrementHandler = () => {
    dispatch(counterActions.decrement());
    dispatch({ type: 'decrement' });
  };
  const increaseHandler = () => {
    dispatch(counterActions.increase(5)); // { type: 'increase', payload: 5 }
    //dispatch({ type: 'increase', amount: 5 });
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increment by 5</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
