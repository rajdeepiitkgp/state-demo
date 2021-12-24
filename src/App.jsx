import React from 'react';
import { Part1, Part2, Part3, Part4, Part5, Part6 } from './components';
import './App.css';

const App = () => {
  return (
    <div className="container">
      <div className="children">
        <Part1 />
      </div>
      <div className="children">
        <Part2 />
      </div>
      <div className="children">
        <Part3 />
      </div>
      <div className="children">
        <Part4 />
      </div>
      <div className="children">
        <Part5 />
      </div>
      <div className="children">
        <Part6 />
      </div>
    </div>
  );
};

export default App;
