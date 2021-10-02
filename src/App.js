import React from 'react';
import './App.css';

import StrangerThings from './components/StrangerThings';

require('dotenv').config();

function App() {
  return (
    <div className="App">

      {process.env.REACT_APP_DEPLOYMENT === 'true' ? <h2>Em desenvolvimento</h2> : null}
      <StrangerThings />
    </div>
  );
}

export default App;
