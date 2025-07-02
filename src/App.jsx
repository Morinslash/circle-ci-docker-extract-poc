import React, { useEffect, useState } from 'react';

function App() {
  const [value, setValue] = useState('');

  useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}config.json`)
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

