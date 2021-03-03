import React, { useState } from 'react';
import SpaceComponent from './SpaceComponent';
import TicTacToe from './TicTacToe';

// const squares = []

const Board = ({square, onClick}) => {

    const [playerXorO, setPlayerXorO] = useState('O')

    // squares: Array(9).fill(null)

    const SpaceComponentArray0through2 = [
        <SpaceComponent playerXorO={playerXorO} setPlayerXorO={setPlayerXorO} />, 
        <SpaceComponent playerXorO={playerXorO} setPlayerXorO={setPlayerXorO} />, 
        <SpaceComponent playerXorO={playerXorO} setPlayerXorO={setPlayerXorO} />, 

    ]

    const SpaceComponentArray3through5 = [
        <SpaceComponent playerXorO={playerXorO} setPlayerXorO={setPlayerXorO} />, 
        <SpaceComponent playerXorO={playerXorO} setPlayerXorO={setPlayerXorO} />, 
        <SpaceComponent playerXorO={playerXorO} setPlayerXorO={setPlayerXorO} />, 

    ]

    const SpaceComponentArray6through9 = [
        <SpaceComponent playerXorO={playerXorO} setPlayerXorO={setPlayerXorO} />, 
        <SpaceComponent playerXorO={playerXorO} setPlayerXorO={setPlayerXorO} />, 
        <SpaceComponent playerXorO={playerXorO} setPlayerXorO={setPlayerXorO} />, 

    ]

    // console.log(SpaceComponentArray0through2[0])
    return(
        <div>
        <div style={{
            // display: 'grid',

            
        }}>
            {playerXorO === 'O' ? "Player X's turn" : "Player O's turn"}
        </div>
        <div
            style={{
                display: 'flex',
                flexDirection: 'row'
            }}
        >
            {SpaceComponentArray0through2}
            </div>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'row'
                }}
            >
            {SpaceComponentArray3through5}
            </div>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'row'
                }}
            >
            {SpaceComponentArray6through9}
            </div>
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