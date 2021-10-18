import React from 'react';
import './App.css';

import StrangerThings from './components/StrangerThings';

require('dotenv').config();

function App() {
  return (
    <div className="App">
      <h2>Em desenvolvimento</h2>
      <StrangerThings />
    </div>
  );
}

export default App;
