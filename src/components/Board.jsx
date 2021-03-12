import React, { useState } from 'react';
import SpaceComponent from './SpaceComponent';
// import TicTacToe from './TicTacToe';
// import TicTacToe from './TicTacToe';
// import WinningAnouncement from './TicTacToe'


const Board = () => {
    const [playerXorO, setPlayerXorO] = useState('X')
    

    // const winningLines = [
    //             [0,1,2],
    //             [3,4,5],
    //             [6,7,8],
    //             [0,3,6],
    //             [1,4,7],
    //             [2,5,8],
    //             [0,4,8],
    //             [2,4,6],
    //         ];
  
    const winningConditions = false
            

    const spacesArray = []
        for(let i = 0; i < 9; i++){
spacesArray.push(<SpaceComponent key={i} playerXorO={playerXorO} setPlayerXorO={setPlayerXorO} />)}

console.log(spacesArray)

    return(
        
        <div>
        <div>
            <div style={{color: 'white', textAlign: 'center', fontSize: '40px'}}>
                {playerXorO === 'X' ? "Player X's turn" : "Player O's turn"}
            </div>
            <div style={{
                width: '31rem',
                height: '30rem',
                margin: 'auto',
                display: 'flex',
                flexWrap: 'wrap',
                
            }}>
           {spacesArray} 
           </div>
            <div style={{color: 'white', textAlign: 'center', fontSize: '40px'}}>
                {winningConditions === true ? 'Player X is the winner' : 'TicTacToe...'}
            </div>
       
        </div>
            <div style={{color: 'white'}}>
                {/* <TicTacToe WinningConditions='WinningConditions'/>
                <WinningConditions /> */}
            </div>
        </div>
    )
}



export default Board