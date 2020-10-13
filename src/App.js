import React, { Fragment, useState } from 'react';
import './App.css';

import Header from './components/Header';
import ScoreCard from './components/ScoreCard';
import DiceCard from './components/DiceCard';

function App() {
  const [playerScore, setPlayerscore] = useState([0,0]);
  const [currenPlayer, setCurrenPlayer] = useState(0);
  const [diceScore, setDiceScore] = useState(1);
  const [roundScore, setRoundScore] = useState(0);

  const roll = () => {
    const newDiceScore = Math.ceil(Math.random() * 6);
    setDiceScore(newDiceScore);
    if (newDiceScore === 1) {
      setCurrenPlayer(currenValue => currenValue === 0 ? 1 : 0);
      setRoundScore(0);
    } else {
      setRoundScore(currenValue => currenValue + newDiceScore);
    }
  };

  const keep = () => {
    setPlayerscore(currenValue => 
      currenValue.map((ele, idx) => idx === currenPlayer ? ele + roundScore : ele))
    setCurrenPlayer(currenValue => currenValue === 0 ? 1 : 0);
    setRoundScore(0);
  };

  const reset = () => {
    setPlayerscore([0, 0]);
    setCurrenPlayer(0);
    setDiceScore(1);
    setRoundScore(0);
  }


  return (
    <Fragment>
      <Header reset={reset} />
      <div className="container">
        <ScoreCard 
        name="1" 
        score={playerScore[0]} 
        active={currenPlayer === 0 ? true: false} />

        <DiceCard 
        diceScore={diceScore}
        roundScore={roundScore}
        roll={roll} 
        keep={keep}/>

        <ScoreCard 
        name="2" 
        score={playerScore[1]} 
        active={currenPlayer === 1 ? true: false} />
      </div>
    </Fragment>
  );
}

export default App;
