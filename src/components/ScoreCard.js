import React from 'react';

function ScoreCard({ name, score, active }) {
  return (
    <div className={`card${active ? " active" : ""}`}>
      <h1 className="player-name">PLAYER {name}</h1>
      <p className="player-score">{score}</p>
    </div>
  );
}

export default ScoreCard;