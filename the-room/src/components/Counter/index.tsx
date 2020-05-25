import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'state';
import { increment, decrement } from 'state/example';

const Counter: React.FC = () => {
  const counter = useSelector((state) => state.example);
  const dispatch = useDispatch();

  const handleDecrease = () => dispatch(decrement());
  const handleIncrease = () => dispatch(increment());

  return (
    <>
      <button type="button" onClick={handleDecrease}>
        -
      </button>
      <div>{counter}</div>
      <button type="button" onClick={handleIncrease}>
        +
      </button>
    </>
  );
};

export default Counter;
