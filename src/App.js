import React from 'react';
import './App.css';

import StrangerThings from './components/StrangerThings';

function App() {
  return (
    <div className="App">
      {process.env.REACT_APP_DEVELOPMENT === 'true' && <h1>Em desenvolvimento</h1>}
      <StrangerThings />
    </div>
    // obrigado Andre!
  );
}

export default App;
