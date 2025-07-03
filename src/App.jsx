import React, { useEffect, useState } from 'react';

function App() {
  const [config, setConfig] = useState({ env: '', release: ''});

  useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}config.json`)
      .then((response) => response.json())
      .then((data) => setConfig(data));
  }, []);

  return (
    <div>
      Hello World from the {config.env}!
      Release: {config.release ? config.release : 'local build'}
    </div>
  );
}

export default App;

