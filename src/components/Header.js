import React from 'react';

function Header({reset}) {
  return (
    <div className="header">
      <button className="btn" onClick={reset}>New Game</button>
    </div>
  );
}

export default Header;