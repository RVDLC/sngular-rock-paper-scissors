import { useState } from 'react';
import { getResult } from '../components/GameAi'
import rock from '../styles/Rock.png';
import paper from '../styles/Paper.png';
import scissor from '../styles/Scissor.png';
import lizard from '../styles/Lizard.png';
import spock from '../styles/Spock.png';

const Game = props => {
    const [wonGames, setWonGames] = useState(props.loggedPlayer.getWinCount());
    const [gameResult, setGameResult] = useState('');
    const [prevAi, setPrevAi] = useState('');
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

        const aiChoice = getResult(hand, prevAi);

        setPrevAi(aiChoice.aiHand);
        resultText(hand,aiChoice.result,aiChoice.aiHand)
        aiChoice.result === 1 && props.loggedPlayer.gameWin();
        setWonGames(props.loggedPlayer.getWinCount());

        localStorage.setItem('playerList', JSON.stringify(props.playerList));
    }
    

  return (
    <div className='gameDiv main'>
        <div className='playerName' data-testid='playerName'>
            Welcome { props.loggedPlayer.getName() }
            <i onClick={e => props.loggedPlayerManagement(false)} className="fa fa-sign-out"></i>
        </div>
        <div className='playerWins' data-testid='playerWins'>
            Your current score: { wonGames }
        </div>
        <div className='handImages'>
        {
            (!gameResult.includes('Oponent') && gameResult.includes('Your')) && <div className='coverHands'><div className='lds-dual-ring'></div></div>
        }
            <img src={rock} className='handImage rock' alt='rock' data-testid='handRock' onClick={e => playGame(0)}/>
            <img src={paper} className='handImage paper' alt='paper' onClick={e => playGame(1)}/>
            <img src={scissor} className='handImage scissor' alt='scissor' onClick={e => playGame(2)}/>
            <img src={lizard} className='handImage lizard' alt='lizard' onClick={e => playGame(4)}/>
            <img src={spock} className='handImage spock' alt='spock' onClick={e => playGame(3)}/>
        </div>
        <div className='resultContainer' data-testid='resultContainer'>
            { gameResult }
        </div>
    </div>
  );
}

export default Game;