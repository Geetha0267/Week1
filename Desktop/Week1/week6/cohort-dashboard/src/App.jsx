import React from 'react';
import CohortDetails from './CohortDetails';

function App() {
  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Cohort Dashboard</h1>
      <CohortDetails name="React Bootcamp" status="ongoing" trainer="Zen" />
      <CohortDetails name="Spring Boot Cohort" status="completed" trainer="Lumi" />
    </div>
  );
}

export default App;
