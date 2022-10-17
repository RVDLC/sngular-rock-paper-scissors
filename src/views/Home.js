
import { useState } from 'react';
import Player from '../components/Player'

const Home = props => {
  const [playerName, setPlayerName] = useState('');
  const [invalidPlayer, setInvalidPlayer] = useState(false);

  const createNewPlayer = name => {
    const newPlayer = new Player(name)

    props.playerListManagement(playerList => [...playerList, newPlayer]);

    return newPlayer;
  };

  const checkInvalidPlayer = () => {
    if (playerName === '' || playerName.includes('"')) {
      setInvalidPlayer(true);
      return true;
    }
    return false;
  }

  const joinPlayer = e => {
    if (!checkInvalidPlayer()) {
      const playerExists = props.playerList.filter(player => player.getName() === playerName);
      playerExists.length > 0 ? props.loggedPlayerManagement(playerExists[0]) : props.loggedPlayerManagement(createNewPlayer(playerName));
    }
}

  return (
    <div className='loginForm main'>
      <div className='nameInputContainer'>
          <input type='text' data-testid='playerInput' className='nameInput' placeholder='Player Name' onChange={e => setPlayerName(e.target.value)}/>
      </div>
      <div className='submitContainer'>
          <button type='submit' className='loginButton' onClick={joinPlayer}>Join</button>
      </div>
      {
        invalidPlayer && <div className='errorDisplay'>Your player name is invalid</div>
      }
    </div>
  );
}

export default Home;
