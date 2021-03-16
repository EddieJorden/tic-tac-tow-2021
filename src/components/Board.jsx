import React, { useState } from 'react';
import SpaceComponent from './SpaceComponent';
// import TicTacToe from './TicTacToe';
// import TicTacToe from './TicTacToe';
// import WinningAnouncement from './TicTacToe'


const Board = () => {
    const [playerXorO, setPlayerXorO] = useState('X')
    const [winningConditions, setWinningConditions] = useState(false)
    const [xSpacesArray] = useState(['', '', '', '', '', '', '', '', ''])

    const squaresArray = []
        for(let i = 0; i < 9; i++){
            squaresArray.push(
                <SpaceComponent 
                    key={i} 
                    index={i} 
                    playerXorO={playerXorO} 
                    setPlayerXorO={setPlayerXorO}
                    xSpacesArray={xSpacesArray}
                />
            )    
        }
         // Const [board,setBoard] = useState(Array(9).fill(null))

        xSpacesArray[0] === "O" && setWinningConditions(true)

console.log(squaresArray)
console.log(xSpacesArray)

    return(       
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
                }}
                >
                    {squaresArray}
                </div>
                <div style={{color: 'white', textAlign: 'center', fontSize: '40px'}}>
                    {winningConditions === true ? 'Player X is the winner' : 'TicTacToe...'}
                </div>
            </div>        
    )
}

export default Board