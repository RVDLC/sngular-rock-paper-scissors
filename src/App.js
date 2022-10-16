import Home from './views/Home';
import Game from './views/Game';
import logo from './styles/logo.png';
import React,{useState, useEffect} from 'react';
import './styles/style.css';
import Player from './components/Player';

function App() {
  const [playerList, setPlayerList] = useState([]);
  const [logedPlayer, setLogedPlayer] = useState(false);

  useEffect(() => {
    const loadList = JSON.parse(localStorage.getItem('playerList'));
    if (loadList) {
      const preparedList = loadList.map(savedPlayer => new Player(savedPlayer.name, savedPlayer.winCount))
      setPlayerList(preparedList);
    }
  }, []);

  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        {
          logedPlayer && <button className='logoutButton' onClick={e => setLogedPlayer(false)}>Log out</button>
        }
      </header>
        {
          !logedPlayer ? <Home playerList={playerList} playerListManagement={setPlayerList} logedPlayerManagement={setLogedPlayer} /> : <Game  playerList={playerList} logedPlayer={logedPlayer}/>
        }
    </div>
  );
}

export default App;

