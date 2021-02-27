import React, { useState } from 'react';
import SpaceComponent from './SpaceComponent';
import TicTacToe from './TicTacToe';

// const squares = []

const Board = ({square, onClick}) => {

    const [playerXorO, setPlayerXorO] = useState('O')

    const SpaceComponentArray = [
        <SpaceComponent playerXorO={playerXorO} setPlayerXorO={setPlayerXorO} />, 
        <SpaceComponent playerXorO={playerXorO} setPlayerXorO={setPlayerXorO} />, 
        <SpaceComponent playerXorO={playerXorO} setPlayerXorO={setPlayerXorO} />, 
        <SpaceComponent playerXorO={playerXorO} setPlayerXorO={setPlayerXorO} />, 
        <SpaceComponent playerXorO={playerXorO} setPlayerXorO={setPlayerXorO} />, 
        <SpaceComponent playerXorO={playerXorO} setPlayerXorO={setPlayerXorO} />, 
        <SpaceComponent playerXorO={playerXorO} setPlayerXorO={setPlayerXorO} />, 
        <SpaceComponent playerXorO={playerXorO} setPlayerXorO={setPlayerXorO} />, 
        <SpaceComponent playerXorO={playerXorO} setPlayerXorO={setPlayerXorO} />, 
    ]

    return(
        <div style={{
            display: 'grid',
            
        }}>
            {playerXorO === 'O' ? "Player X's turn" : "Player O's turn"}
            {SpaceComponentArray}
        </div>
    // <div>
    //     {squares.map((squares, i) => (
    //         <SpaceComponent key={i} value={square} onClick={() => onClick(i)} />     
    //     ))}
    // </div>
// {/* <div style={{display: 'flex', flexWrap: 'wrap', width: '50%'}}>
// <div>
// <SpaceComponent playerXorO={playerXorO} setPlayerXorO={setPlayerXorO} />
// <SpaceComponent playerXorO={playerXorO} setPlayerXorO={setPlayerXorO} />
// <SpaceComponent playerXorO={playerXorO} setPlayerXorO={setPlayerXorO} />
// </div>
// <div>
// <SpaceComponent playerXorO={playerXorO} setPlayerXorO={setPlayerXorO} />
// <SpaceComponent playerXorO={playerXorO} setPlayerXorO={setPlayerXorO} />
// <SpaceComponent playerXorO={playerXorO} setPlayerXorO={setPlayerXorO} />
// </div>
// <div>
// <SpaceComponent playerXorO={playerXorO} setPlayerXorO={setPlayerXorO} />
// <SpaceComponent playerXorO={playerXorO} setPlayerXorO={setPlayerXorO} />
// <SpaceComponent playerXorO={playerXorO} setPlayerXorO={setPlayerXorO} />
// </div>
// </div> */}
)}

// console.log(squares)

export default Board