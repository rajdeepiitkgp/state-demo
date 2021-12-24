import React from 'react';
import './shared.css';
import { useDispatch } from 'react-redux';
import { increment, decrement } from '../features/counterSlice';

const Part1 = () => {
  const dispatch = useDispatch();
  return (
    <div className="card">
      <div className="card-content">Part1</div>
      <div className="card-content">Number Section</div>
      <button className="card-content" onClick={() => dispatch(increment())}>
        Increment
      </button>
      <button className="card-content" onClick={() => dispatch(decrement())}>
        Decrement
      </button>
    </div>
  );
};

export default Part1;
