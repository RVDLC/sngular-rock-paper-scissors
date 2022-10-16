
import { useState } from 'react';
import Player from '../components/Player'

const Home = props => {
  const [playerName, setPlayerName] = useState('');

  const setNewPlayer = name => {
    const newPlayer = new Player(name)

    props.playerListManagement(playerList => [...playerList, newPlayer]);

    return newPlayer;
  };

  const joinPlayer = e => {
    const playerExists = props.playerList.filter(player => player.getName() === playerName);

    playerExists.length > 0 ? props.logedPlayerManagement(playerExists[0]) : props.logedPlayerManagement(setNewPlayer(playerName));

}

  return (
    <div className='loginForm main'>
      <div className='nameContainer'>
          <input type='text' data-testid='playerInput' className='nameInput' placeholder='Player Name' onChange={e => setPlayerName(e.target.value)}/>
      </div>
      <div className='submitContainer'>
          <button type='submit' className='loginButton' onClick={joinPlayer}>Join</button>
      </div>
        </div>
  );
}

export default Home;
