import React from 'react';
import TicTacToe from './components/TicTacToe';
import Board from './components/Board';
import SpaceComponent from './components/SpaceComponent';
import playerTurn from './components/TicTacToe';

function App() {
	return (
		<div className="App">
			<Board />
		</div>
	);
}

export default App;
