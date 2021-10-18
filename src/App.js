import React from 'react';
import './App.css';

import StrangerThings from './components/StrangerThings';

require('dotenv').config();

function App() {
  return (
    <div className="App">
      <h3>Em desenvolvimento</h3>
      <StrangerThings />
    </div>
  );
}

export default App;
