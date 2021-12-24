import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deposit, withdraw } from '../features/accountSlice';
const Part5 = () => {
  const dispatch = useDispatch();
  const [amount, setAmount] = useState(0);
  return (
    <div className="card">
      <div className="card-content">Part5</div>
      <div className="card-content">Deposit Section</div>
      <input
        type="number"
        placeholder="Add Amount"
        className="card-content"
        value={amount}
        onChange={(e) => setAmount(parseInt(e.target.value))} />
      
      <br />
      <button className="card-content" onClick={() => dispatch(deposit(amount))}>
        Deposit
      </button>
      <button className="card-content" onClick={() => dispatch(withdraw(amount))}>
        Withdraw
      </button>
    </div>
  );
};

export default Part5;
