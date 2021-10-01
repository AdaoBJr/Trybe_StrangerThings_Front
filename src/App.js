import React from 'react';
import './App.css';

require('dotenv').config();

import StrangerThings from './components/StrangerThings';

function App() {
  return (
    <div className="App">
      {process.env.REACT_APP_DEPLOYMENT && <h2>Em desenvolvimento</h2>}
      <StrangerThings />
    </div>
  );
}

export default App;
