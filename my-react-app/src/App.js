import './App.css';

// Embedded CSS
const container = {
  padding: '20px',
  textAlign: 'center'
}

function App() {
  return (
      <div style = {container}>
          {/* Inline CSS */}
          <h1 style = {{borderBottom: '1px solid red'}}>Bismillahir Rahmanir Rahim</h1>
      </div>
  );
}

export default App;
