import './App.css';
import CalculateScore from './Components/CalculateScore';

function App() {
  return (
    <div>
      <CalculateScore 
        name="Lumi Sharma"
        school="Zen High School"
        total={450}
        goal={5}
      />
    </div>
  );
}

export default App;