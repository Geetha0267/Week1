import React from 'react';

const OfficeCard = ({ office }) => {
  const rentStyle = {
    color: office.rent > 60000 ? 'green' : 'red',
    fontWeight: 'bold',
  };

  return (
    <div style={{
      border: '1px solid gray',
      borderRadius: '10px',
      padding: '10px',
      marginBottom: '10px',
      width: '300px'
    }}>
      <h3>{office.name}</h3>
      <img src={office.image} alt="Office" width="100%" height="150px" />
      <p style={rentStyle}>Rent: ₹{office.rent}</p>
      <p>Address: {office.address}</p>
    </div>
  );
};

export default OfficeCard;
