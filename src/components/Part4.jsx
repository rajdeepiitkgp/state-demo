import React from 'react';
import { useSelector } from 'react-redux';

const Part4 = () => {
  const count = useSelector(({ counter: { value } }) => value);
  return (
    <div className="card">
      <div className="card-content">Part4</div>
      <div className="card-content">Number Display</div>
      <p>Current Value of Number : {count}</p>
    </div>
  );
};

export default Part4;
