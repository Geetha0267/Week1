import React from 'react';
import OfficeCard from './OfficeCard';

function App() {
  const officeList = [
    {
      name: "Workspace Galaxy",
      rent: 55000,
      address: "Banjara Hills, Hyderabad",
      image: "https://via.placeholder.com/300x150?text=Office+1",
    },
    {
      name: "Zenith Spaces",
      rent: 75000,
      address: "Whitefield, Bangalore",
      image: "https://via.placeholder.com/300x150?text=Office+2",
    },
    {
      name: "Elite Office Hub",
      rent: 62000,
      address: "Andheri, Mumbai",
      image: "https://via.placeholder.com/300x150?text=Office+3",
    },
  ];

  return (
    <div style={{ padding: '20px' }}>
      <h1>🏢 Office Space Rental App</h1>
      {officeList.map((office, index) => (
        <OfficeCard key={index} office={office} />
      ))}
    </div>
  );
}

export default App;

