import logo from './logo.svg';
import './App.css';
import convertToArray from '../src/functions/convertToArray'
import MainApp from './components/MainApp';

const getconvert=(e)=>{
  convertToArray("59,35,59,34,59,33,59,32,59,31,60,30,60,29,60,27,60,24,60,21,60,18,60,14,59,11,59")
  
}

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" /> */}
        <MainApp></MainApp>
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <button onClick={getconvert}>
        <canvas id='canvas' width="250" height ="250">My Data</canvas>
      Activate Lasers
    </button> */}
    </div>
  );
}

export default App;
