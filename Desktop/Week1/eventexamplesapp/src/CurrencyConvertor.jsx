import React, { useState } from 'react';

const CurrencyConvertor = () => {
  const [rupees, setRupees] = useState('');
  const [euros, setEuros] = useState('');

  const handleSubmit = () => {
    const rate = 0.011; // 1 INR = 0.011 EUR approx
    const converted = parseFloat(rupees) * rate;
    setEuros(converted.toFixed(2));
  };

  return (
    <div>
      <h2>💱 Currency Convertor (INR to EUR)</h2>
      <input
        type="number"
        placeholder="Enter INR amount"
        value={rupees}
        onChange={(e) => setRupees(e.target.value)}
      />
      <button onClick={handleSubmit}>Convert</button>
      {euros && <p>💶 EUR: €{euros}</p>}
    </div>
  );
};

export default CurrencyConvertor;
