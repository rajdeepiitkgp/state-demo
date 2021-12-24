import React from 'react';
import { useSelector } from 'react-redux';

const Part2 = () => {
  const balance = useSelector(({ account: { balance } }) => balance);

  return (
    <div className="card">
      <div className="card-content">Part2</div>
      <div className="card-content">Deposit Display</div>
      <p>Current Balance in Bank : {balance}</p>
    </div>
  );
};

export default Part2;