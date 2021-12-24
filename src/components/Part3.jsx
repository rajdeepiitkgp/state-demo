import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addName, removeName } from '../features/customerSlice';

const Part3 = () => {
  const dispatch = useDispatch();

  const [addNameValue, setAddNameValue] = useState();
  const [removeNameValue, setRemoveNameValue] = useState();

  return (
    <div className="card">
      <div className="card-content">Part3</div>
      <div className="card-content">Name Section</div>
      <input
        type="text"
        placeholder="Add Name"
        className="card-content"
        onChange={(e) => setAddNameValue(e.target.value)}
      />
      <button
        className="card-content"
        onClick={() => dispatch(addName(addNameValue))}
      >
        Add Name
      </button>
      <br />
      <input
        type="text"
        placeholder="Remove Name"
        className="card-content"
        onChange={(e) => setRemoveNameValue(e.target.value)}
      />
      <button
        className="card-content"
        onClick={() => dispatch(removeName(removeNameValue))}
      >
        Remove Name
      </button>
    </div>
  );
};

export default Part3;
