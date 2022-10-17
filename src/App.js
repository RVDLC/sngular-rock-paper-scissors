import Home from './views/Home';
import Game from './views/Game';
import logo from './styles/logo.png';
import React,{useState, useEffect} from 'react';
import './styles/style.css';
import Player from './components/Player';

function App() {
  const [playerList, setPlayerList] = useState([]);
  const [loggedPlayer, setLoggedPlayer] = useState(false);

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
      </header>
        {
          !loggedPlayer ? <Home playerList={playerList} playerListManagement={setPlayerList} loggedPlayerManagement={setLoggedPlayer} /> : <Game  playerList={playerList} loggedPlayer={loggedPlayer} loggedPlayerManagement={setLoggedPlayer}/>
        }
    </div>
  );
}

export default App;

