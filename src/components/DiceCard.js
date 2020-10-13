import React from 'react';

function DiceCard({ diceScore, roundScore, roll, keep }) {
  return (
    <div className="card">
      <div className="row">
        <button className="btn btn-danger btn-fw" onClick={roll}>Roll</button>
        <button className="btn btn-success btn-fw" onClick={keep}>Keep</button>
      </div>
      <div className="row">
        <div className="dice-score">{diceScore}</div>
      </div>
      <div className="row">
        <p className="round-score">Round Score : {roundScore}</p>
      </div>
    </div>
  );
}

export default DiceCard;