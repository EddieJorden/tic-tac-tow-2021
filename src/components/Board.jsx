import React, { useState } from 'react';
import SpaceComponent from './SpaceComponent';

const Board = () => {
    const [playerXorO, setPlayerXorO] = useState('X')
    const [winningConditions, setWinningConditions] = useState(false)
    const [spacesArray] = useState(['', '', '', '', '', '', '', '', '', ])

    const calculateWinner = (xSpacesArray) => {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
    
        ]
    
        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (spacesArray[a] && spacesArray[b] === spacesArray[b] && spacesArray[a] === spacesArray[c]) {
                return spacesArray[a];
            }
        }
        return null;
    }
   

    const squaresArray = []
        for(let i = 0; i < 9; i++){
            squaresArray.push(
                <SpaceComponent 
                    key={i} 
                    index={i} 
                    playerXorO={playerXorO} 
                    setPlayerXorO={setPlayerXorO}
                    spacesArray={spacesArray}
                />
            )    
        }

console.log(squaresArray)
console.log(spacesArray)

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