import VoterDetails from './components/VoterDetails'

function App() {
  return (
    <div style={{ margin: '2rem'}}>
      <h1 data-testid="page-label">Philadelphia Qualified Voter Listing 2018</h1>
      <VoterDetails></VoterDetails>
    </div>
  );
}

export default App;
