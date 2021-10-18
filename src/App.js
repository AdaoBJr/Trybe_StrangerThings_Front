import React from 'react';
import './App.css';

import StrangerThings from './components/StrangerThings';

function App() {
  return (
    <div className="App">
      { process.env.REACT_APP_DEVELOPMENT === 'true' && <h3>Em desenvolvimento</h3> }
      <StrangerThings />
    </div>
  );
}

export default App;
