import { useState } from 'react';
import { getResult } from '../components/GameAi'
import rock from '../styles/Rock.png';
import paper from '../styles/Paper.png';
import scissor from '../styles/Scissor.png';
import lizard from '../styles/Lizard.png';
import spock from '../styles/Spock.png';

const Game = props => {
    const [wonGames, setWonGames] = useState(props.logedPlayer.getWinCount());
    const [gameResult, setGameResult] = useState('');
    const handNameList = ['Rock', 'Paper', 'Scissors', 'Spock', 'Lizard'];
    const text = ['loses','wins','draws'];

    const resultText = (playerHand, comparison, aiHand) => {
        const startigText = `Your ${handNameList[playerHand]}`
        const finalText = typeof comparison !== 'undefined' ? `${startigText} ${text[comparison]} to Oponent's ${handNameList[aiHand]}` : startigText;
        setGameResult(finalText)
    }

    async function playGame(hand) {
        resultText(hand);
        await new Promise(resolve => setTimeout(resolve, 1000));

        const result = getResult(hand);

        resultText(hand,result[0],result[1])

        result[0] === 1 && props.logedPlayer.gameWin();
        setWonGames(props.logedPlayer.getWinCount());
    }

  return (
    <div className='gameDiv main'>
        <div className='playerName'>
            { props.logedPlayer.getName() }
        </div>
        <div className='playerWins'>
            { wonGames }
        </div>
        <div className='handImages'>
            <img src={rock} className='handImage rock' alt='rock' onClick={e => playGame(0)}/>
            <img src={paper} className='handImage paper' alt='paper' onClick={e => playGame(1)}/>
            <img src={scissor} className='handImage scissor' alt='scissor' onClick={e => playGame(2)}/>
            <img src={lizard} className='handImage lizard' alt='lizard' onClick={e => playGame(4)}/>
            <img src={spock} className='handImage spock' alt='spock' onClick={e => playGame(3)}/>
        </div>
        <div className='resultContainer'>
            { gameResult }
        </div>
    </div>
  );
}

export default Game;