import React from 'react';
import './App.css';

import StrangerThings from './components/StrangerThings';
import TagComponent from './components/TagComponent';

require('dotenv').config();

const devAmb = process.env.REACT_APP_TAG_DEV === 'true';

function App() {
  return (
    <div className="App">
      { devAmb && <TagComponent /> }
      <StrangerThings />
    </div>
  );
}

export default App;
