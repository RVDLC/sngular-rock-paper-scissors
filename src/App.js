import Home from './views/Home';
import Game from './views/Game';
import logo from './styles/logo.png';
import React,{useState} from 'react';
import './styles/style.css';
// import Ranking from './views/Ranking';

function App() {
  const [playerList, setPlayerList] = useState([]);
  const [logedPlayer, setLogedPlayer] = useState(false);

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

