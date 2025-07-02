import React from 'react';
import config from './config.json';

function App() {
  return (
    <div>
      Hello World from the {config.value}!
    </div>
  );
}

export default App;

