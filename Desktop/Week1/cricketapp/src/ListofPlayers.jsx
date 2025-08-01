import React from 'react';

const ListofPlayers = () => {
  const players = [
    { name: "Virat Kohli", role: "Batsman" },
    { name: "Jasprit Bumrah", role: "Bowler" },
    { name: "MS Dhoni", role: "Wicket Keeper" },
  ];

  return (
    <div>
      <h2>List of Players</h2>
      <ul>
        {players.map((player, index) => (
          <li key={index}>
            {player.name} - {player.role}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListofPlayers;
