import React from 'react';
import './App.css';

import StrangerThings from './components/StrangerThings';

const APP_DESENVOLVIMENTO = process.env.APP_DESENVOLVIMENTO || false;

function App() {
  return (
    <div className="App">
      { REACT_APP_APP_DESENVOLVIMENTO === 'true' && <h3>Em desenvolvimento</h3> }
      { console.log(APP_DESENVOLVIMENTO) }
      <StrangerThings />
    </div>
  );
}

export default App;
