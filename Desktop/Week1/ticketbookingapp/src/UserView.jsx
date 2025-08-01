import React from 'react';

const UserView = () => {
  return (
    <div style={{ marginTop: '20px' }}>
      <h2>Welcome User</h2>
      <p>You can now book tickets!</p>

      <h3>Your Flights</h3>
      <ul>
        <li>✅ Booked: Hyderabad → Bangalore | 10:00 AM</li>
        <li>✅ Booked: Delhi → Mumbai | 1:30 PM</li>
      </ul>
    </div>
  );
};

export default UserView;
