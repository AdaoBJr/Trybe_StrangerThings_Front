import React from 'react';
import './App.css';

import StrangerThings from './components/StrangerThings';

function App() {
  const status = process.env.REACT_APP_STATUS;
  return (
    <div className="App">
      {status && <h1>{status}</h1>}
      <StrangerThings />
    </div>
  );
}

export default App;
