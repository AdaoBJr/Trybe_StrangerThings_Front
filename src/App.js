import React from 'react';
import './App.css';

import StrangerThings from './components/StrangerThings';

function App() {
  return (
    <div className="App">
      {console.log(process.env.DEVELOPMENT)}
      {console.log(typeof (process.env.DEVELOPMENT))}
      { process.env.DEVELOPMENT === 'true'
        ? <h1>Em desenvolvimento</h1> : <StrangerThings /> }
    </div>
  );
}

export default App;
