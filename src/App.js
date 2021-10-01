import React from 'react';
import './App.css';

import StrangerThings from './components/StrangerThings';

function App() {
  const serverEnv = process.env.SERVER_ENV;
  return (
    <div className="App">
      <span>{serverEnv}</span>
      <StrangerThings />
    </div>
  );
}

export default App;
