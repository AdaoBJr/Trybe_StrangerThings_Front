import React from 'react';
import './App.css';

import StrangerThings from './components/StrangerThings';

require('dotenv').config();

const server = process.env.SERVER_ENV;

function App() {
  return (
    <div className="App">
      { server === 'development' && <h2>Em desenvolvimento</h2>}
      <StrangerThings />
    </div>
  );
}

export default App;
