import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  console.log(React.StrictMode);

  return (
    <div className="App">
      <header className="App-header">
        <div className="pictures">
          <img src={logo} className="App-logo" alt="logo" />
          <img src={logo} className="App-logo" alt="logo" />
          <img src={logo} className="App-logo" alt="logo" />
        </div>

        <h1>Hello from V2</h1>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://main.d2c4ng8xnw2vj.amplifyapp.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
