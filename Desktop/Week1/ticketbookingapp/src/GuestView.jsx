import React from 'react';

const GuestView = () => {
  return (
    <div style={{ marginTop: '20px' }}>
      <h2>Welcome Guest</h2>
      <p>Please login to book tickets.</p>

      <h3>Available Flights</h3>
      <ul>
        <li>✈️ Hyderabad → Bangalore | 10:00 AM</li>
        <li>✈️ Delhi → Mumbai | 1:30 PM</li>
        <li>✈️ Chennai → Kolkata | 4:45 PM</li>
      </ul>
    </div>
  );
};

export default GuestView;
