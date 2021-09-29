import React from 'react';
import './App.css';

import StrangerThings from './components/StrangerThings';

const ambiente = process.env.REACT_APP_AMBIENTE || 'deu erro';

function App() {
  return (
    <div className="App">
      { `<h2>${ambiente}</h2>` }
      <StrangerThings />
    </div>
  );
}
export default App;
