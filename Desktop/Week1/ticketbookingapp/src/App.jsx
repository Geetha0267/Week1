import React, { useState } from 'react';
import GuestView from './GuestView';
import UserView from './UserView';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => setIsLoggedIn(true);
  const handleLogout = () => setIsLoggedIn(false);

  return (
    <div style={{ padding: '20px' }}>
      <h1>✈️ Ticket Booking App</h1>

      {isLoggedIn ? (
        <>
          <button onClick={handleLogout}>Logout</button>
          <UserView />
        </>
      ) : (
        <>
          <button onClick={handleLogin}>Login</button>
          <GuestView />
        </>
      )}
    </div>
  );
}

export default App;
