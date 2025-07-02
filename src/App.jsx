import React, { useEffect, useState } from 'react';

function App() {
  const [value, setValue] = useState('');

  useEffect(() => {
    fetch('/config.json')
      .then((response) => response.json())
      .then((data) => setValue(data.value));
  }, []);

  return (
    <div>
      Hello World from the {value}!
    </div>
  );
}

export default App;

