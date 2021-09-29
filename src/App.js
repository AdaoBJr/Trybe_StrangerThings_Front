import React from 'react';
import './App.css';
import 'dotenv';

import StrangerThings from './components/StrangerThings';

const isDevelopment = process.env.REACT_APP_AMBIENTE === 'development';

function App() {
  return (
    <div className="App">
      { isDevelopment && <h1>Em desenvolvimento</h1> }
      <StrangerThings />
    </div>
  );
}

export default App;
