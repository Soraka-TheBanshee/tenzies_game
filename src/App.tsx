import React from 'react';
import Board from './components/Board';
import Description from './components/Description';
import Game from './components/Game';


function App() {
  return (
    <>
      <h1 className='text-center text-7xl mt-2 text-red-900 ' >Hello world!</h1>
      <Board >
        <Description />
        <Game />
      </Board>
    </>
  
  );
}

export default App;
