import './App.css';
import React, { useState } from 'react';

function App() {

  // useState and hooks can be used in functiononly not in Class
  // useState must be on the Top of the function

  const [count, setCount] = useState(4)


  function decrementCount() {
    setCount(prevCount => prevCount-1)
  }

  function incrementCount() {
    setCount(count + 1)
  }

  return (
    <>
      <button onClick={decrementCount}>-</button>
      <span>{count}</span>
      <button onClick={incrementCount}>+</button>
    </>
  );
}

export default App;