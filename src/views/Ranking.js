function Ranking(props) {
    const orderedRanking = props.playerList.sort((a,b) => a.getWinCount() - b.getWinCount());

    console.log(orderedRanking);

  return (
    <div className='rankingContainer'>
        
    </div>
  );
}

export default Ranking;