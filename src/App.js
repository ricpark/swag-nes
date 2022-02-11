import lv1 from './LV1.svg';
import lv2 from './LV2.svg';
import lv3 from './LV3.svg';
import lv4 from './LV4.svg';
import aceSpade from './ace-spade.png';
import kingSpade from './king-spade.png';
import queenSpade from './queen-spade.png';
import jackSpade from './jack-spade.png';
import tenSpade from './ten-spade.png';
import theStar from './tarot-the-star.jpeg';

import './App.css';
import "nes.css/css/nes.min.css"
import {useState} from "react";

let logoHeightWidth = 65;
const charmander = <i className="nes-charmander"></i>;
const squirtle = <i className="nes-squirtle"></i>;
const bulbasaur = <i className="nes-bulbasaur"></i>;

function App() {
  const [pokemon, setPokemon] = useState(<i className="nes-charmander"></i>);

  function togglePokemon() {

    if (pokemon === charmander) {
      setPokemon(squirtle);
    } else if (pokemon === squirtle) {
      setPokemon(bulbasaur);
    } else {
      setPokemon(charmander);
    }
  }

  return (
    <div className="App">
      <header className="App-page">
        <i className="nes-icon is-large trophy"> </i>
        <img src={theStar}/>
        <div>
          <img src={tenSpade} className="App-logo" />
          <img src={jackSpade} className="App-logo" />
          <img src={queenSpade} className="App-logo"/>
          <img src={kingSpade} className="App-logo" />
          <img src={aceSpade} className="App-logo" />
        </div>
        <div>
          <img src={lv1} height={logoHeightWidth} width={logoHeightWidth} className="App-logo" alt="logo" />
          <img src={lv2} height={logoHeightWidth} width={logoHeightWidth} className="App-logo" alt="logo" />
          <img src={lv3} height={logoHeightWidth} width={logoHeightWidth} className="App-logo" alt="logo" />
          <img src={lv4} height={logoHeightWidth} width={logoHeightWidth} className="App-logo" alt="logo" />
        </div>
          <div className={"nes-container is-dark is-bordered"}>
            {pokemon}
          </div>
          <button type="button" onClick={togglePokemon} className={"nes-btn is-warning"}>Louis Buitton</button>
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
