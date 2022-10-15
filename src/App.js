import Home from './views/Home';
import Game from './views/Game';
import Player from './components/Player'
import logo from './styles/logo.png';
import React,{useState} from 'react';
import './styles/style.css';
// import Ranking from './views/Ranking';

function App() {
  const p1 = new Player('Durin');
  const p2 = new Player('Elrond')
  const [playerList, setPlayerList] = useState([p1, p2]);
  const [logedPlayer, setLogedPlayer] = useState(false);
  p1.setWinCount(2);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {
          logedPlayer && <button className='logoutButton' onClick={e => setLogedPlayer(false)}>Log out</button>
        }
      </header>
        {
          !logedPlayer ? <Home playerList={playerList} playerListManagement={setPlayerList} logedPlayerManagement={setLogedPlayer} /> : <Game logedPlayer={logedPlayer}/>
        }
    </div>
  );
}

export default App;

