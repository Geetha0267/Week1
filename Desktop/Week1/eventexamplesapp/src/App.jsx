import React, { useState } from 'react';
import CurrencyConvertor from './CurrencyConvertor';

function App() {
  const [count, setCount] = useState(0);

  // Function to handle increment and say hello
  const handleIncrease = () => {
    setCount(prev => prev + 1);
    sayHello();
  };

  const sayHello = () => {
    alert("Hello! The value was increased.");
  };

  // Function to handle say welcome
  const sayWelcome = (message) => {
    alert(message);
  };

  // Synthetic event
  const handleSynthetic = (e) => {
    e.preventDefault();
    alert("I was clicked");
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>🎯 Event Handling Examples</h1>

      <h2>Counter: {count}</h2>
      <button onClick={handleIncrease}>Increment</button>
      &nbsp;
      <button onClick={() => setCount(prev => prev - 1)}>Decrement</button>

      <br /><br />
      <button onClick={() => sayWelcome("Welcome to React Events!")}>Say Welcome</button>

      <br /><br />
      <button onClick={handleSynthetic}>Synthetic Event Button</button>

      <br /><br />
      <CurrencyConvertor />
    </div>
  );
}

export default App;
