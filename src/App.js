import VoterDataSummary from './components/VoterDataSummary'
import VoterDetails from './components/VoterDetails'

function App() {
  return (
    <div className="App">
      <h2>Philadelphia Qualified Voter Listing 2018</h2>
      <VoterDataSummary></VoterDataSummary>
      <VoterDetails></VoterDetails>
    </div>
  );
}

export default App;
