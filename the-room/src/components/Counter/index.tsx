import React from 'react';
import clsx from 'clsx';
import { useDispatch } from 'react-redux';
import { useSelector } from 'state';
import { increment, decrement } from 'state/example';

import styles from './counter.module.scss';

const Counter: React.FC = () => {
  const counter = useSelector((state) => state.example);
  const dispatch = useDispatch();

  const handleDecrease = () => dispatch(decrement());
  const handleIncrease = () => dispatch(increment());

  const numberStyle = clsx({
    [styles.negative]: counter < 0,
    [styles.positive]: counter > 0,
    [styles.high]: counter > 10,
  });

  return (
    <>
      <button type="button" onClick={handleDecrease}>
        -
      </button>
      <div className={numberStyle}>{counter}</div>
      <button type="button" onClick={handleIncrease}>
        +
      </button>
    </>
  );
};

export default Counter;
