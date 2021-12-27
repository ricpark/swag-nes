import logo from './logo.svg';
import './App.css';
import "nes.css/css/nes.min.css"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/*<img src={logo} className="App-logo" alt="logo" />*/}
        <i className="nes-icon is-large trophy"> </i>
        {<div className={"nes-container with-title"}>
            <button className={"nes-btn is-warning"}>Louis Buitton</button>
         </div>}
        {/*<p>*/}
        {/*  Edit <code>src/App.js</code> and save to reload.*/}
        {/*</p>*/}
        {/*<a*/}
        {/*  className="App-link"*/}
        {/*  href="https://reactjs.org"*/}
        {/*  target="_blank"*/}
        {/*  rel="noopener noreferrer"*/}
        {/*>*/}
        {/*  Learn React*/}
        {/*</a>*/}
      </header>
    </div>
  );
}

export default App;
