import VoterDataSummary from './components/VoterDataSummary'
import VoterDetails from './components/VoterDetails'

function App() {
  return (
    <div className="App">
      <h1>Philadelphia Qualified Voter Listing 2018</h1>
      <VoterDataSummary></VoterDataSummary>
      <VoterDetails></VoterDetails>
    </div>
  );
}

export default App;
