import React from 'react';

function App() {
  return (
    <div>
      <p>NODE_ENV: {process.env.NODE_ENV}</p>
      <h2>REACT_APP: {process.env.REACT_APP_API_KEY}</h2>
    </div>
  );
}

export default App;