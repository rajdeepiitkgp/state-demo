import React from 'react';
import { useSelector } from 'react-redux';

const Part6 = () => {
  const names = useSelector(({ customer: { names } }) => names);

  return (
    <div className="card">
      <div className="card-content">Part6</div>
      <div className="card-content">Name Display</div>
      <p>The Names Are: {names.join(', ')}</p>
    </div>
  );
};

export default Part6;
