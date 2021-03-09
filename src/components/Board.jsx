import React, { useState } from 'react';
import SpaceComponent from './SpaceComponent';
// import TicTacToe from './TicTacToe';
// import TicTacToe from './TicTacToe';
// import WinningAnouncement from './TicTacToe'


const Board = ({square, onClick}) => {
    const [playerXorO, setPlayerXorO] = useState('O')
    const [winningConditions, setWinningConditions] = useState(false)
  
    const playerXSpaces = []

    const spacesArray = []
        for(let i = 0; i < 9; i++){
spacesArray.push(<SpaceComponent key={i} playerXorO={playerXorO} setPlayerXorO={setPlayerXorO} />)}

console.log(spacesArray)
 
    // const SpaceComponentArray = [        
    //     <div><SpaceComponent playerXorO={playerXorO} setPlayerXorO={setPlayerXorO} /></div>, 
    //     <div><SpaceComponent playerXorO={playerXorO} setPlayerXorO={setPlayerXorO} /></div>, 
    //     <div><SpaceComponent playerXorO={playerXorO} setPlayerXorO={setPlayerXorO} /></div>, 
    //     <div><SpaceComponent playerXorO={playerXorO} setPlayerXorO={setPlayerXorO} /></div>, 
    //     <div><SpaceComponent playerXorO={playerXorO} setPlayerXorO={setPlayerXorO} /></div>, 
    //     <div><SpaceComponent playerXorO={playerXorO} setPlayerXorO={setPlayerXorO} /></div>, 
    //     <div><SpaceComponent playerXorO={playerXorO} setPlayerXorO={setPlayerXorO} /></div>, 
    //     <div><SpaceComponent playerXorO={playerXorO} setPlayerXorO={setPlayerXorO} /></div>, 
    //     <div><SpaceComponent playerXorO={playerXorO} setPlayerXorO={setPlayerXorO} /></div>, 
    // ]
    // const winningConditions =true
   
    return(
        
        <div>
        <div>
            <div style={{color: 'white', textAlign: 'center', fontSize: '40px'}}>
                {playerXorO === 'O' ? "Player X's turn" : "Player O's turn"}
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